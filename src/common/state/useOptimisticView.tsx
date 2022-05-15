import { Dispatch, SetStateAction } from 'react';

export type EntityId = unknown;

export interface AddOperation<T> {
  entity: T;
  type: 'add';
}
export interface EditOperation<T> {
  id: EntityId;
  newEntity: T;
  type: 'edit';
}
export interface DeleteOperation {
  id: EntityId;
  type: 'delete';
}

export type Operation<T> = AddOperation<T> | DeleteOperation | EditOperation<T>;

export type WithId<T> = T & { id: EntityId };

export interface OptimisticState<T> {
  entities: WithId<T>[];
  operations: Operation<T>[];
}

export const useOptimisticView = <T,>({
  entities,
  operations,
}: OptimisticState<T>) =>
  operations.reduce(
    (state, operation) => getNextState(state, operation, () => -1),
    entities
  );

export const useOptimisticApi = <T,>(
  entities: WithId<T>[],
  setEntities: Dispatch<SetStateAction<WithId<T>[]>>,
  operations: Operation<T>[],
  setOperations: Dispatch<SetStateAction<Operation<T>[]>>
) => {
  const removeOperation = (operation: Operation<T>) =>
    setOperations((prev) =>
      prev.filter((prevOperation) => prevOperation !== operation)
    );

  const addOperation = (operation: Operation<T>) =>
    setOperations((prev) => [...prev, operation]);

  return {
    execute: (operation: Operation<T>) => {
      console.log('executing', { operation });
      addOperation(operation);
      return {
        fail: () => {
          removeOperation(operation);
          console.log('failing', { operation });
        },
        complete: () => {
          console.log('completing', { operation });

          // this will cause additional re-renders (pre crateRoot() code)
          // https://blog.saeloun.com/2021/07/22/react-automatic-batching.html
          removeOperation(operation);
          // this also break SRP, we can inject this logic like handleOperation()
          setEntities((state) => getNextState(state, operation, Date.now));
        },
      };
    },
  };
};

const getNextState = <T,>(
  state: WithId<T>[],
  operation: Operation<T>,
  idFactory = Date.now
) => {
  switch (operation.type) {
    case 'add':
      return [...state, { ...operation.entity, id: idFactory() }];
    case 'delete':
      return state.filter(
        (entity) => !('id' in entity) || entity.id !== operation.id
      );
    case 'edit':
      return state.map((entity) =>
        !('id' in entity) || entity.id !== operation.id
          ? entity
          : { ...operation.newEntity, id: entity.id }
      );
  }
};

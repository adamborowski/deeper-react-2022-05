export interface File {
  type: 'file';
  name: string;
}

export type Node = File | Directory;

export interface Directory {
  type: 'directory';
  name: string;
  children: Node[];
}

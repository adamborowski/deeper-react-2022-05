import { useEffect } from 'react';
import { uniqueId } from './uniqueId';

export const Counter = () => {
  const renderCount = uniqueId();
  let counter = 0;

  console.log('render:', 'renderCount', renderCount, 'counter', counter);

  useEffect(() => {
    const interval = setInterval(() => {
      counter = counter + 1;
      console.log('interval:', 'renderCount', renderCount, 'counter', counter);
    }, 1000);

    return () => {
      console.log('teardown:', 'renderCount', renderCount, 'counter', counter);
      clearInterval(interval);
    };
  }, []);

  return <div>Counter: {counter}</div>;
};

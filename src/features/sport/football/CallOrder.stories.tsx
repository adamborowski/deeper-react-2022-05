import { useEffect, useLayoutEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

export default {};

const Child = ({ name, age }: { name: string; age: number }) => {
  console.log('I am child');
  return (
    <div>
      <span>My name is {name}</span>
      <span>I am {age} years old</span>
    </div>
  );
};

const App = () => {
  console.log('I am App');
  return (
    <div className="app">
      <Child name="John" age={33} />
    </div>
  );
};

export const CallOrder = () => {
  const elementToRender = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    console.clear();
    console.log('A');

    const appToRender = <App />;

    console.log('B');

    const root = createRoot(elementToRender.current!);

    console.log('C');

    root.render(appToRender);

    console.log('D');
    console.log({ appToRender });

    return () => root.unmount();
  }, []);

  return <div ref={elementToRender} />;
};

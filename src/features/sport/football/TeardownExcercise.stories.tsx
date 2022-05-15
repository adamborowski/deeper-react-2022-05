import { useEffect, useLayoutEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { Counter } from './TeardownExcercise';

export default {};

export const Default = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    console.clear();
    const renderer = createRoot(ref.current!);
    renderer.render(<Counter />);
    const t1 = setTimeout(() => renderer.render(<Counter />), 2500);
    const t2 = setTimeout(() => renderer.render(<Counter />), 3500);
    const t3 = setTimeout(() => renderer.unmount(), 4500);
    return () => {
      [t1, t2, t3].forEach(clearTimeout);
      renderer.unmount();
    };
  }, []);

  return (
    <div>
      <p>Try to explain what happened on a whiteboard (timeline?)</p>
      <div ref={ref} />
    </div>
  );
};

import { FC, useEffect } from 'react';

export interface MatchCounterProps {
  teamA: string;
  teamB: string;
  matchStartTime: number;
}

const uniqueId = (() => {
  let counter = 0;
  return () => {
    const toReturn = counter;
    counter = counter + 1;
    return toReturn;
  };
})();

export const MatchCounter: FC<MatchCounterProps> = ({
  matchStartTime,
  teamB,
  teamA,
}) => {
  let time = 0;
  const renderId = uniqueId();

  console.log('MatchCounter is rendering, time', time, 'renderId', renderId);

  useEffect(() => {
    const interval = setInterval(() => {
      time = (90 * 60 * 1000 + matchStartTime - Date.now()) / 1000;
      console.log('time', time, 'renderId', renderId);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [matchStartTime]);

  return (
    <div>
      <div>
        Mecz {teamA} - {teamB}
      </div>
      <div>Do końca: {time}s</div>
    </div>
  );
};

export const uniqueId = (() => {
  let counter = 0;
  return () => {
    const toReturn = counter;
    counter = counter + 1;
    return toReturn;
  };
})();

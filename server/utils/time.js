export function timeToSeconds(time) {
  return time
    .split(':')
    .reverse()
    .reduce((acc, value, index) => {
      const seconds = parseInt(value, 10) * 60 ** index;
      return (acc += seconds);
    }, 0);
}

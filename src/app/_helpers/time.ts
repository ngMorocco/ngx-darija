export const timeToSeconds = (time: string): number =>
  time
    .split(':')
    .reverse()
    .map((value, index) => parseInt(value, 10) * 60 ** index)
    .reduce((acc, seconds) => (acc += seconds), 0);

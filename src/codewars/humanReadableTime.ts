/**
 * https://www.codewars.com/kata/52685f7382004e774f0001f7/train/typescript
 */

const secondsA = 86399;

export function humanReadable(seconds:number): string {

  // get hours (divide by 3600 seconds) math.floor...
  let hrs: string | number = Math.floor(seconds / 3600); // 23
  const hrsSecs = hrs * 3600; // 82800

  // get minutes from remaining seconds
  let mins: string | number = Math.floor((seconds - hrsSecs) / 60); // (86399 - 82800) / 60 = (3599 / 60) = 59
  const minsSecs = mins * 60; // 3540

  // remaining seconds
  let secs: string | number = seconds - hrsSecs - minsSecs; // 86399 - 82800 - 3540 = 59

  hrs = hrs > 9 ? JSON.stringify(hrs) + ':' : '0' + hrs + ':';
  mins = mins > 9 ? JSON.stringify(mins) + ':' : '0' + mins + ':';
  secs = secs > 9 ? JSON.stringify(secs) : '0' + secs;

  return hrs + mins + secs;
};

humanReadable(secondsA);
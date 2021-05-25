/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const len = intervals.length;
  let index = 0;
  for (let i = 0; i < len; i++) {
    const [min] = newInterval;
    if (i === len - 1) {
      if (min < intervals[i][0]) {
        index = i - 1;
        break;
      }
      index = i;
      break;
    }
    if (i === 0 && min < intervals[i][0]) {
      index = -1
      break;
    }
    if (min >= intervals[i][0] && min < intervals[i + 1][0]) {
      index = i;
      break;
    }
  }

  const list = [...intervals.splice(0, index + 1), newInterval, ...intervals];
  console.log(list, index, len);
  return list.reduce((result, item) => {
    const [min, max] = item;
    const len = result.length;
    if (len <= 0) {
      return [item];
    }
    const [resultMin, resultMax] = result[len - 1];
    if (min > resultMax || max < resultMin) {
      return [...result, item];
    }
    result[len - 1] = [Math.min(min, resultMin), Math.max(max, resultMax)];
    return result;
  }, []);
};
console.log(
  insert(
    [
      [2, 5],
      [6, 7],
      [8, 9],
    ],
    [0, 1]
  )
);

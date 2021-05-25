/**
 * @param {string} s
 * @return {string}
 */

const findMinChar = (list, pre, result, isUp) => {
  if (!list.length) {
    return result;
  }

  let preStr = pre
  console.log(list);
  for (var i = 0; i < list.length; i++) {
    const item = list[i];
    if (item < preStr && !isUp) {
      result.push(item);
      preStr = item;
      list.splice(i, 1);
      break;
    }
    if (isUp && item > preStr) {
      result.push(item);
      preStr = item;
      list.splice(i, 1);
      break;
    }
  }
  console.log(result, "======", list, "11111111", preStr);
  if (preStr === pre) {
    return result;
  }
  return [...result, ...findMinChar(list, preStr, result, isUp)];
};

var sortString = function (s) {
  let result = [];
  function sort(s) {
    if (!s) return "";
    const list = s.split("");
    const minList = findMinChar(list, "", result, false);
    if (list.length <= 0) return `${[...list, ...minList].join('')}}`;
    const maxlist = findMinChar(list, "", result, true);
    if (list.length <= 0) return `${[...list, ...maxlist].join('')}}`;
    return sort(list.join(''));
  }
  result = sort(s);
  return result;
};
console.log(sortString("aaaabbbbcccc"));

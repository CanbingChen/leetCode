/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const romanMap = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
  };
  const len = `${num}`.length;
  const list = `${num}`.split("").map((item,index) => {
    return [Number(item), Math.pow(10,(len - 1-index))];
  });

  console.log(list);
  function renderRoman(num,unit) {
      if(num === 4)return `${romanMap[unit]}${romanMap[unit*5]}`
      if(num === 9)return `${romanMap[unit]}${romanMap[unit*10]}`
      if(num <4)return `${[...new Array(num).keys()].map(() => romanMap[unit]).join('')}`
      if(num <9)return `${romanMap[unit*5]}${renderRoman(num-5,unit)}`
  }
  const result = list.map(item => {
    return renderRoman(item[0],item[1])
  })
  return result.join('')
};

console.log(intToRoman(1994));

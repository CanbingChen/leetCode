var lengthOfLastWord = function (s) {
  const str = s.trim();
  console.log(str,'str')
  if (!str.length) return 0;
  const list = str.split(' ')
  const len = list.length
  console.log(str,len,'str')
  return list[len-1].length
};

// console.log(lengthOfLastWord("Hello World"));
// console.log(lengthOfLastWord(" "));
console.log(lengthOfLastWord("a "));

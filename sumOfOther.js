module.exports = function sumOfOther(arr) {
  const sum = arr.reduce((acc, v) => acc + v, 0);
  return arr.map(v => sum - v);
};

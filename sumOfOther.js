module.exports = function sumOfOther(arr) {
    let sum = arr.reduce((acc, v) => acc + v, 0);
    return arr.map(v => sum - v)
}
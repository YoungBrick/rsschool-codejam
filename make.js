module.exports = function make(...args) {
  if (typeof args[args.length - 1] !== 'function') {
    return function (...newArgs) {
      return make(...args, ...newArgs);
    };
  }
  const fn = args.pop();
  return args.reduce((a, v) => fn(a, v), 0);
};

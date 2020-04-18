function curry(func) {
  function curried(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function(...moreArg) {
        return curried(...args, ...moreArg);
      };
    }
  }
  return curried;
}

const multiply = (a, b, c) => {
  return a * b * c;
};

const currying = curry(multiply);

console.log(currying(4)(2)(2));

function sum(...arg) {
  let total = arg.reduce((a, b) => parseInt(a) + parseInt(b), 0);

  function innerSum(...innerArg) {
    if (innerArg.length) {
      return sum(...arg, ...innerArg);
    } else {
      return total;
    }
  }
  return innerSum;
}

console.log(sum(1)(2)(2)(3)());

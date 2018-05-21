function sum() {
  let sum = 0;
  let args = Array.from(arguments);
  args.forEach((el) => {
    sum += el;
  });
  return sum;
}

function sum2(...args) {
  let sum = 0;
  args.forEach((el) => {
    sum += el;
  });
  return sum;
}

// Function.prototype.myBind = function (ctx, ...bindArgs) {
//   return (...callArgs) => this.apply(ctx, bindArgs.concat(callArgs));
// };

Function.prototype.myBind = function (ctx) {
  let bindArgs = Array.from(arguments).slice(1);
  let that = this;
  return function () {
    let args = Array.from(arguments);
    that.apply(ctx, bindArgs.concat(args));
  };
};

Function.prototype.stephcurrysucks = function (numArgs) {
  
  let args = [];
  let that = this;
  function _curry(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return that.apply(that, args);
    } else {
      return _curry;
    }
  }
  return _curry;
};

function curriedSum(numArgs){
  let numbers = [];
  function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      let total = 0;
      numbers.forEach((el) => total += el);
      return total;
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

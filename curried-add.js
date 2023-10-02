function curriedAdd(sum) {
    if (sum === undefined) return 0;
    return function addNum(num) {
      if (num === undefined) return sum;
      sum += num;
      return addNum;
    };
  }

module.exports = { curriedAdd };

'use strict';

const count = 10;
let counter = 0;

const queries = {
  'one': numb => numb === 1,
  'middle': numb => numb > 18 && numb < 50,
};

const nonBlockCbFn =  (arr, callback, query) => {
  const filter = (arr, arr2 = []) => {
    if (counter === count) {
      counter = 0;
      setTimeout(() => {
        counter += 1;
        filter(arr, arr2);
      }, 0);
    } else {
      const numb = arr.pop();
      const res = queries[query](numb);
      if (res) arr2.push(numb);
      if (arr.length > 0) {
        counter += 1;
        filter(arr, arr2);
      } else {
        callback(null, arr2);
      }
    }
  };
  filter(arr);
};

module.exports = nonBlockCbFn;

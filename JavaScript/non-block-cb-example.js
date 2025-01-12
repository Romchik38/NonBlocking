'use strict';

const nonBlock = require('./non-block-cb-fn.js');
const fs = require('fs');

const start = new Date();

let k = 0;
const logger = setInterval(() => {
  fs.readFile('non-block-cb-fn.js', (err, data) => {
    console.log(data);
    k++;
  });
}, 2);

const getRand = () => Math.floor(Math.random() * 100);
const arr = new Array(1000).fill(0).map(getRand);

const cb = (err, data) => {
  console.log({ data });
  console.log({ k });
  clearInterval(logger);
  console.log(new Date() - start);
};

nonBlock(arr.slice(), cb, () => true);
//nonBlock(arr.slice(), cb, numb => numb > 18 && numb < 50);

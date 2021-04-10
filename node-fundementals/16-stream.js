const { createReadStream } = require('fs');

// const stream = createReadStream('./content/big.txt', {
//   highWaterMark: 9000,
// });
const stream = createReadStream('./content/big.txt', {
  encoding: 'utf8',
});
// const stream = createReadStream('./content/big.txt');

// default 64kb
// last buffer - remainder

stream.on('data', (result) => {
  console.log(result);
});
stream.on('error', (err) => {
  console.log(err);
});

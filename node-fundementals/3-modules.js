// CommonJS, every file is a module by default
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-first-module');
const sayHi = require('./5-utils');
const data = require('./6-alternative');

require('./7-mind-grenade');

console.log(data);

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);

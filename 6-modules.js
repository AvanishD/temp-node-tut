// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./2-names')
const sayHi = require('./3-utils')
const data = require('./4-alternative-syntax')
require('./5-mind-grenade')

sayHi('Avanish')
sayHi(names.anshita)
sayHi(names.kruti)
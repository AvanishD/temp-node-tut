const { basename } = require('path')
const path = require('path')

console.log(path.sep)

const filepath = path.join('/content', 'subfolder', 'test.txt')
console.log(filepath)

const base = basename(filepath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subgroup', 'test.txt')
console.log(absolute)
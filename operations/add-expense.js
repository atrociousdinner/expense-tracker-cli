const { program } = require('commander')

const data = {}
let count = 0

program
    .option('-d, --description <desc>', 'Add a description of the expense')
    .option('-a, --add <number>', 'Add expense value')
program.parse() 
const options = program.opts()

for (let key in options) {
    data['id'] = count
    data[key] = options[key]
    count++
}

console.log(data)
#!/usr/bin/env node

const { program } = require('commander')


const { add_command } = require('./operations/add-expense')
const {delete_command} = require('./operations/delete-expense')
const {list_command} = require('./operations/list-expense')
const { summary_command } = require('./operations/summary-expense')
const { set_command } = require('./operations/set-budget')


add_command(program)
delete_command(program)
list_command(program)
summary_command(program)
set_command(program)

program.parse()
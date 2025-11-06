#!/usr/bin/env node

const { program } = require('commander')


const { add_command } = require('./operations/add_expense')
const {delete_command} = require('./operations/delete_expense')
const {list_command} = require('./operations/list_expense')
const { summary_command } = require('./operations/summary_expense')
const { set_command } = require('./operations/set_budget')


add_command(program)
delete_command(program)
list_command(program)
summary_command(program)
set_command(program)

program.parse()
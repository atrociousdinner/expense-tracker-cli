const { program } = require("commander");
const { getExpense } = require("./file_operations/get_expense")

const listexpense = async () => {
    try {
        const data = await getExpense();
        const expenses = JSON.parse(data || "[]")
        console.table(expenses)
    }
    catch (err) {
        console.error("Error listing expenses: ", err)
    }
}

program
    .command('list')
    .description('list all expenses')
    .action(listexpense())

module.exports = {listexpense}
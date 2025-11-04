const { program } = require("commander");
const { getExpense } = require("./file_operations/get_expense")

const listexpense = async (category) => {
    try {
        const data = await getExpense();
        const expenses = JSON.parse(data || "[]")
        if (category === undefined) {
            console.table(expenses)
        }
        else {
            filtered_expenses = expenses.filter(expense => expense.category.toLowerCase() == category.toLowerCase())
            if (filtered_expenses.length == 0) {
                console.log(`No categories found for ${category}`)
                return
            }
            else {
                console.table(filtered_expenses)
            }
        }
    }
    catch (err) {
        console.error("Error listing expenses: ", err)
    }
}

function list_command(program) {
    program
        .command('list')
        .option('-c, --category <category>', 'filter the expense with categories')
    .description('list all expenses')
        .action((options) => {
        listexpense(options.category)
    })
}


module.exports = {list_command}
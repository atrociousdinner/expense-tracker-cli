const { write_budget } = require("./file_operations/write_budget.js");
const { summaryexpense } = require("./summary_expense.js")
const {get_budget} = require("./file_operations/get_budget.js")


async function set_budget(options) {
    try {
        const budget = await get_budget()
        const budget_parsed = JSON.parse(budget)
        monthNum = parseInt(options.month)
        amountNum = parseInt(options.amount)
        spentNum = await summaryexpense(monthNum, silent = true)    
        budget_to_send = {
            "month" : `${monthNum}`,
            "budget" : `${amountNum}`,
            "spent" : `${spentNum}`
        }
        updated_budget = budget_parsed.filter(record => parseInt(record.month) !== monthNum)
        updated_budget.push(budget_to_send)
        await write_budget(JSON.stringify(updated_budget, null, 2))

    }
    catch (err) {
        console.error(`Cannot set the budget: ${err}`)
    }
}



function set_command(program) {
  program
    .command("set")
    .description('set a budget for a given month; previously set budgets will be overwritten when the command is executed again')
    .option("-a, --amount <number>", "add budget amount")
    .option("-m, --month <month>", "specify the month, default month is the current month.")

    .action(async (options) => {
        set_budget(options)
    });
}

module.exports = { set_command };

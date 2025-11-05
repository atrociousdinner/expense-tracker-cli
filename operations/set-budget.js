const { write_budget } = require("./file_operations/write_budget.js");
const {summaryexpense} = require("./summary-expense.js")


async function set_budget(options) {
    try {
        budget = []
        monthNum = parseInt(options.month)
        amountNum = parseInt(options.amount)
        spentNum = await summaryexpense(monthNum, silent = true) // Temporary. We shall invoke a function that calculates the total sum
        budget_to_send = {
            "month" : `${monthNum}`,
            "budget" : `${amountNum}`,
            "spent" : `${spentNum}`
        }
        budget.push(budget_to_send)
        await write_budget(JSON.stringify(budget, null, 2))

    }
    catch (err) {
        console.error(`Cannot set the budget: ${err}`)
    }
}



function set_command(program) {
  program
    .command("set")
    .description('set a budget for a given month')
    .option("-a, --amount <number>", "add budget amount")
    .option("-m, --month <month>", "specify the month, default month is the current month.")

    .action(async (options) => {
        set_budget(options)
    });
}

module.exports = { set_command };

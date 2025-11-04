const { program } = require("commander");
const { write_data } = require("./file_operations/write_data.js");
const { getExpense } = require("./file_operations/get_expense.js");


function add_command(program) {
  program
  .command("add")
  .option("-d, --description <desc>", "add a description of the expense")
  .option("-a, --amount <number>", "add expense value")
  .action(async (options) => {
    const data = await getExpense();
    let id_to_append = 0;
    let expenses = [];
    if (!(data.length == 0)) {
      expenses = JSON.parse(data);
      id_to_append = parseInt(expenses[expenses.length - 1]["id"]);
    }
    const data_to_send = {};

    data_to_send.id = id_to_append + 1;
    data_to_send.date = new Date().toISOString().split("T")[0];
    data_to_send.description = options.description;
    data_to_send.amount = parseInt(options.amount);

    expenses.push(data_to_send);
    await write_data(JSON.stringify(expenses, null, 2))
    console.log(`Expense added successfully (ID: ${data_to_send.id})`);
  });
}

module.exports = {add_command}
const { program } = require("commander");
const { write_data } = require("./file_operations/write_data.js");
const { getExpense } = require("./file_operations/get_expense.js");

program
  .command("delete")
  .option("--id <number>", "delete the specified id")
  .action(async (options) => {
    const data = await getExpense();
    const expenses = JSON.parse(data);
    const id_to_delete = options["id"];

      const index = expenses.findIndex((expense) => (expense.id == id_to_delete));
      

      if (index !== -1) {
          removed_expense = expenses.splice(index, 1)[0]
          console.table(removed_expense)
          write_data(JSON.stringify(expenses, null, 2))
      }
      else {
          console.log('The specified id does not exist.')
      }
  });

program.parse();

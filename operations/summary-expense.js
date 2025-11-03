const { program } = require("commander");
const { getExpense } = require("./file_operations/get_expense");

const summaryexpense = async (month) => {
    try {
    const monthNum = parseInt(month)
    const data = await getExpense();
    let expenses = JSON.parse(data || "[]");

    if (month !== undefined) {
      if (monthNum < 1 || monthNum > 12 || isNaN(monthNum)) {
        console.log("Invalid month.");
        return;
      } else {
        expenses = expenses.filter(
          (expense) => parseInt(expense.date.split("-")[1]) == month
        );
      }
    }

    let summary = 0;
    expenses.forEach((expense) => {
      summary += expense.amount;
    });
    console.log(`$${summary}`);
  } catch (err) {
    console.error("Error summing expenses: ", err);
  }
};

program
  .command("summary")
  .description("sum all the expenses")
  .option("-m, --month <month>", "the total expense for the month specified")
  .action((options) => {
    summaryexpense(options.month);
  });

program.parse();
module.exports = { summaryexpense };

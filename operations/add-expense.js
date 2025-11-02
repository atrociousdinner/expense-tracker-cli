const { program } = require("commander");
const fs = require("fs").promises;
const path = require("path");
const filePath = path.join(__dirname, "../database/data.json");

getExpense = async () => {
  try {
    await fs.access(filePath);
    return await read_data();
  } catch {
    return [];
  }
};

read_data = async () => {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return data;
  } catch (err) {
    console.error(`Cannot read file: `, err);
  }
};

write_data = async (data) => {
  try {
    await fs.writeFile(filePath, data, "utf8");
    const parsed = (JSON.parse(data))
    const lastExpense = parsed[parsed.length - 1];

    console.log(`Expense added successfully (ID: ${lastExpense.id})`);
  } catch (err) {
    console.error(`Cannot write file: `, err);
  }
};

program
  .command("add")
  .option("-d, --description <desc>", "add a description of the expense")
  .option("-a, --amount <number>", "add expense value")
  .action(async (options) => {
    const data = await getExpense();
    let id_to_append = 0;
    let expenses = []
    if (!(data.length == 0)) {
      expenses = JSON.parse(data);
      id_to_append = parseInt(expenses[expenses.length - 1]["id"]);
    }
    const data_to_send = {};


    data_to_send.id = id_to_append + 1;
    data_to_send.date = new Date().toISOString().split('T')[0]
    data_to_send.description = options.description;
    data_to_send.amount = parseInt(options.amount);


    expenses.push(data_to_send)
    write_data(JSON.stringify(expenses, null, 2))
  });

program.parse();

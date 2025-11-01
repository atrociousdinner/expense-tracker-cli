const { program } = require("commander");
const { read } = require("fs");
const fs = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "../database/data.json");
const data = {};
const data_array = [];
let count = 0;

file_status = async () => {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
};

read_data = async () => {
  try {
    const data = await fs.readFile(filePath, "utf8");
    console.log(data);
  } catch (err) {
    console.error(`Cannot read file: `, err);
  }
};

write_data = async (data) => {
  try {
    await fs.appendFile(filePath, data,"utf8");
    console.log(data);
  } catch (err) {
    console.error(`Cannot read file: `, err);
  }
};

program
  .command("add")
  .option("-d, --description <desc>", "add a description of the expense")
  .option("-a, --amount <number>", "add expense value")
  .action(async (options) => {
    data.id = count++;
    data.description = options.description;
    data.amount = options.amount;
    const status = await file_status();
    if (status) {
      null;
    } else {
      write_data(JSON.stringify([data], null, 2));
    }
  });

// file_status();
program.parse();

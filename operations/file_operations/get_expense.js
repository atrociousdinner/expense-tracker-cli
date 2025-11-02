const fs = require("fs").promises;
const { read_data } = require('./read_data.js')
const path = require("path");
const filePath = path.join(__dirname, "../../database/data.json");

getExpense = async () => {
  try {
    await fs.access(filePath);
    return await read_data();
  } catch {
    return [];
  }
};

module.exports = {getExpense}
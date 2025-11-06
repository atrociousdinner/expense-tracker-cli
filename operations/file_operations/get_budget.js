const fs = require("fs").promises;
const { read_budget } = require('./read_budget')
const path = require("path");
const filePath = path.join(__dirname, "../../database/budget.json");

get_budget = async () => {
  try {
    await fs.access(filePath);
    return await read_budget();
  } catch {
    return [];
  }
};

module.exports = {get_budget}
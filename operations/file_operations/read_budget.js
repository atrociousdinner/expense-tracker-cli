const fs = require("fs").promises;
const path = require("path");


const filePath = path.join(__dirname, "../../database/budget.json");

read_budget = async () => {
    try {
      const budget = await fs.readFile(filePath, "utf8");
      return budget;
    } catch (err) {
      console.error(`Cannot read file: `, err);
    }
};
  
module.exports = {read_budget}
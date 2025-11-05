
const fs = require("fs").promises;
const path = require("path");


const filePath = path.join(__dirname, "../../database/budget.json");

write_budget = async (budget) => {
    try {
      await fs.writeFile(filePath, budget, "utf8");
    } catch (err) {
      console.error(`Cannot write file: `, err);
    }
};
  
module.exports = {write_budget}
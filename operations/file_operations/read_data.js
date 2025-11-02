
const fs = require("fs").promises;
const path = require("path");


const filePath = path.join(__dirname, "../../database/data.json");

read_data = async () => {
    try {
      const data = await fs.readFile(filePath, "utf8");
      return data;
    } catch (err) {
      console.error(`Cannot read file: `, err);
    }
};
  
module.exports = {read_data}
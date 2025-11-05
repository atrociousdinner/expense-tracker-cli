
const fs = require("fs").promises;
const path = require("path");


const filePath = path.join(__dirname, "../../database/data.json");

write_data = async (data) => {
    try {
      await fs.writeFile(filePath, data, "utf8");
    } catch (err) {
      console.error(`Cannot write file: `, err);
    }
};
  
module.exports = {write_data}
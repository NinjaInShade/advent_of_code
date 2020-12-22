const fs = require("fs");
const path = require("path");

module.exports = function parse_file(folder, file_name) {
  // Read the input file line by line, creating an array of inputs.
  const input_file = path.join(__dirname, folder, file_name);
  return (input_array = fs.readFileSync(input_file).toString().split("\r\n"));
};

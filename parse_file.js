const fs = require("fs");
const path = require("path");

// This function parses a file according to the desired split.
module.exports = function parse_file(folder, file_name, split) {
  // Read the input file on the split, creating an array of inputs.
  const input_file = path.join(__dirname, folder, file_name);
  return (input_array = fs.readFileSync(input_file).toString().split(split));
};

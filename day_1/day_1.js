const fs = require("fs");
const path = require("path");

const input_file = path.join(__dirname, "day_1_input.txt");

// Read the input file line by line, creating an array of inputs.
let input_array = fs.readFileSync(input_file).toString().split("\r\n");

function day_1(input) {
  // 2 loops, once to ensure looping through whole array, and other to do the comparison against each other number.
  for (i in input) {
    for (j in input) {
      // This if statement ensures the same index in the array is never added up.
      if (i == j) {
        continue;
      }

      // Check for if the numbers add up to the desired 2020. Had to parse them from strings to int. Then return the desired multiplied result.
      if (parseInt(input[i]) + parseInt(input[j]) == 2020) {
        return parseInt(input[i]) * parseInt(input[j]);
      }
    }
  }
}

const output = day_1(input_array);
console.log(output);

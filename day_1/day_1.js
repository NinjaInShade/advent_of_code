const parse_file = require("../parse_file.js");

const input_array = parse_file("day_1", "day_1_input.txt");

function day_1_part_1(input) {
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

function day_1_part_2(input) {
  // 3 loops, once to ensure looping through whole array, and other to do the comparison against each other number.
  for (i in input) {
    for (j in input) {
      // This if statement ensures the same index in the array is never added up.
      if (i == j) {
        continue;
      }

      for (k in input) {
        // This if statement ensures the same index in the array is never added up.
        if (j == k) {
          continue;
        }

        // Check for if the numbers add up to the desired 2020. Had to parse them from strings to int. Then return the desired multiplied result.
        if (parseInt(input[i]) + parseInt(input[j]) + parseInt(input[k]) == 2020) {
          return parseInt(input[i]) * parseInt(input[j] * parseInt(input[k]));
        }
      }
    }
  }
}

const part_1_output = day_1_part_1(input_array);
const part_2_output = day_1_part_2(input_array);

console.log(`Part 1: ${part_1_output}\nPart 2: ${part_2_output}`);

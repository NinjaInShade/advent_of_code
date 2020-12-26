const parse_file = require("../parse_file.js");

const input_array = parse_file("day_6", "day_6_input.txt", "\r\n\r\n");

// SET Data structure
function day_6_part_1(input) {
  // Keep track of the sums
  let total_sums = 0;

  // Loop over inputs.
  for (i in input) {
    // This splits up every person in the group's answers into an array element for processing.
    const answers = input[i].split(/\s+/);

    // We use a set data structure as we only want non-duplicate answers.
    let unique_answers = new Set();

    // This loops over each persons answers.
    for (j in answers) {
      // Since a persons answers are in a string, each letter is one "yes" we need one more loop.
      for (k in answers[j]) {
        // Add each value to the set.
        unique_answers.add(answers[j][k]);
      }
    }

    total_sums += unique_answers.size;
  }

  return total_sums;
}

function day_6_part_2(input) {
  return 0;
}

const part_1_output = day_6_part_1(input_array);
const part_2_output = day_6_part_2(input_array);

console.log(`Part 1: ${part_1_output}\nPart 2: ${part_2_output}`);

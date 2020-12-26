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
  // Keep track of the sums
  let total_sums = 0;

  // Loop over inputs.
  for (i in input) {
    // This splits up every person in the group's answers into an array element for processing.
    const answers = input[i].split(/\s+/);

    // An array we will use that by the end will include only answers that everyone answered yes to.
    const non_unique_answers = [];

    // A javascript map to store key:value pairs of how many times a letter (answer) has come up.
    let occurrences = {};
    let count;

    // This loops over each persons answers.
    for (j in answers) {
      // Since a persons answers are in a string, each letter is one "yes" we need one more loop.
      for (k in answers[j]) {
        // Get the current count for that answer/letter
        count = occurrences[answers[j][k]];

        // If we have a value for that key, we set it to the current count of that key + 1 , otherwise its not yet defined so we make it 1.
        occurrences[answers[j][k]] = count ? count + 1 : 1;
      }
    }

    // Now we loop through our occurences to see which ones we need to add to non_unique_answers.
    for (const [key, value] of Object.entries(occurrences)) {
      // If a key (a letter) has a value (comes up) of the size of answers -
      // which is how many people answered in the group, we can be sure that everyone answered it.
      if (value === answers.length) {
        non_unique_answers.push(key);
      }
    }

    total_sums += non_unique_answers.length;
  }

  return total_sums;
}

const part_1_output = day_6_part_1(input_array);
const part_2_output = day_6_part_2(input_array);

console.log(`Part 1: ${part_1_output}\nPart 2: ${part_2_output}`);

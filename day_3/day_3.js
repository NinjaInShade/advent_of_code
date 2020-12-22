const parse_file = require("../parse_file.js");

const input_array = parse_file("day_3", "day_3_input.txt");

function day_3_part_1(input) {
  // Variable to keep track of tree's we hit
  let trees_encountered = 0;

  // Loop through each element in array (or each line from the input file)
  for (i in input) {
    // In challenge it says pattern on each line repeats many times, i'll do 5 for arguments sake.
    let repeated_line = input[i];
    for (j = 0; j < 5; j++) {
      repeated_line = `${repeated_line}${repeated_line}`;
    }

    // Going down 1 is simulated automatically by looping through each element in the array which is a new line from input anyway. Going across/right each time is done by multiplying the current index by 3.
    // Because we start at the index 0 (starting position , we can call this position 1) and we add 3 each time (position 1+3 = 4th position) it is already at the right index as the 4th position is the 3rd index.
    if (repeated_line[3 * i] === "#") {
      trees_encountered += 1;
    }
  }

  return trees_encountered + 1;
}

function day_3_part_2(input) {
  return 0;
}

const part_1_output = day_3_part_1(input_array);
const part_2_output = day_3_part_2(input_array);

console.log(`Part 1: ${part_1_output}\nPart 2: ${part_2_output}`);

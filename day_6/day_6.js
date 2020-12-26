const parse_file = require("../parse_file.js");

const input_array = parse_file("day_6", "day_6_input.txt", "\r\n\r\n");

function day_6_part_1(input) {
  for (i in input) {
    const answers = input[i].split(/\s+/);
    console.log(answers);
  }

  return 0;
}

function day_6_part_2(input) {
  return 0;
}

const part_1_output = day_6_part_1(input_array);
const part_2_output = day_6_part_2(input_array);

console.log(`Part 1: ${part_1_output}\nPart 2: ${part_2_output}`);

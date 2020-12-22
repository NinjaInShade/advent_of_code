const parse_file = require("../parse_file.js");

const input_array = parse_file("day_2", "day_2_input.txt");

function day_2_part_1(input) {
  // Data comes in the format "least-most letter: password" (eg. ["6-10 s: sadvasdasfvas"]), so i have to parse it first into variables.

  for (i in input) {
    // Initial split parses data into an array of 3 elements. ["least-most", "letter:", "password"] - eg ["6-10", "s:", "sadvasdasfvas"]
    // This means i will have to parse each bit of data i need.
    const initial_split = input[i].split(" ");

    // least_most_parse gives an array of ["least", "most"] - eg ["6", "10"]. I set up this variable to not repeat code.
    const least_most_parse = initial_split[0].split("-");
    const least_occurences = least_most_parse[0];
    const most_occurences = least_most_parse[1];

    // Parsing letter and password via indexing.
    const letter = initial_split[1][0];
    const password = initial_split[2];
  }
}

function day_2_part_2(input) {
  return;
}

const part_1_output = day_2_part_1(input_array);
const part_2_output = day_2_part_2(input_array);

console.log(`Part 1: ${part_1_output}\nPart 2: ${part_2_output}`);

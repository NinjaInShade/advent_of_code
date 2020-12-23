const parse_file = require("../parse_file.js");

const input_array = parse_file("day_3", "day_3_input.txt");

function day_3_part_1(input, x_slope, y_slope) {
  // Variable to keep track of tree's we hit
  let trees_encountered = 0;

  for (i in input) {
    // In challenge it says pattern on each line repeats many times, i'll do 15 for arguments sake.
    let repeated_line = input[i];
    for (j = 0; j < 15; j++) {
      repeated_line = `${repeated_line}${repeated_line}`;
    }

    // This line ensures we skip any lines ( the y axis ) if its not in the slopes' times tables.
    if (i % y_slope !== 0) {
      continue;
    }

    // We now check the x position ( remember were on the correct y position ) by multiplying x_slope by the iteration of the loop.
    // We have to then divide by y_slope incase the gap we've jumped in the y axis is more than one, as we dont count the x movement if we were never there, whereas just i does.
    if (repeated_line[(x_slope * i) / y_slope] === "#") {
      trees_encountered += 1;
    }
  }

  return trees_encountered;
}

function day_3_part_2(input) {
  // The slopes the challenge wants me to test.
  slopes = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
  ];

  // Keeps a running count of each answer multiplied together.
  let multiplication_count = 1;

  for (i in slopes) {
    // We use part 1 of this challenge to calculate each slopes trees encountered.
    const trees_encountered = day_3_part_1(input, slopes[i][0], slopes[i][1]);
    console.log(trees_encountered);

    multiplication_count = multiplication_count * trees_encountered;
  }

  return multiplication_count;
}

const part_1_output = day_3_part_1(input_array, 3, 1);
const part_2_output = day_3_part_2(input_array);

console.log(`Part 1: ${part_1_output}\nPart 2: ${part_2_output}`);

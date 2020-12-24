const parse_file = require("../parse_file.js");

const input_array = parse_file("day_5", "day_5_input.txt", "\r\n");

// Binary partion function
function partition(lower_letter, upper_letter, least, most, letter) {
  const difference = most - least;

  if (difference === 1) {
    if (letter === lower_letter) {
      return [least];
    }

    return [most];
  }

  let lower_half = [least, (difference + 1) / 2 + (least - 1)];
  let upper_half = [(difference + 1) / 2 + least, most];

  // If letter is equal to the lower key letter, return lower half
  if (letter === lower_letter) {
    // Returns array of the new least and most range.
    return lower_half;
  }

  // If letter is equal to the upper key letter, return upper half
  if (letter === upper_letter) {
    // Returns array of the new least and most range.
    return upper_half;
  }
}

// Util function to run my partition function until the result is found.
function run_partitions(lower_letter, upper_letter, starting_least, starting_most, data) {
  // We store the least/most keep track of the ranges that get put back into the partition function,
  // and partition data's length dictates if it needs more partitioning

  let least = starting_least;
  let most = starting_most;
  let partition_data;

  for (i in data) {
    partition_data = partition(lower_letter, upper_letter, least, most, data[i]);

    // If the returning array is length 2, meaning a least and most value is present, we set the least,most variables to the newer ones to be partitioned again
    if (partition_data.length === 2) {
      least = partition_data[0];
      most = partition_data[1];
    }
  }

  // Every letter was processed, so the partition has definately ended, and the array holds one value, the desired result.
  return partition_data[0];
}

function day_5_part_1(input) {
  let highest_id = 0;

  // Loop through every boarding pass
  for (i in input) {
    let row;
    let col;
    let id;

    // Step 1. Figure out the row number for the boarding pass. The first 7 characters will tell us the needed information.
    row = run_partitions("F", "B", 0, 127, input[i].slice(0, 7));

    // Step 2. Figure out the column number for the boarding pass.
    col = run_partitions("L", "R", 0, 7, input[i].slice(7));

    // Step 3. Figure out ID. Do this by multiplying row by 8 then adding the column.
    id = row * 8 + col;

    // Step 4. Check if this boarding passes id is higher than highest_id, if so set highest_id to this boarding passes id.
    if (id > highest_id) {
      highest_id = id;
    }
  }

  return highest_id;
}

function day_5_part_2(input) {
  return 0;
}

const part_1_output = day_5_part_1(input_array);
const part_2_output = day_5_part_2(input_array);

console.log(`Part 1: ${part_1_output}\nPart 2: ${part_2_output}`);

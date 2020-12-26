const parse_file = require("../parse_file.js");

const input_array = parse_file("day_5", "day_5_input.txt", "\r\n");

function binary_partition(string, lower_char, upper_char, max) {
  low = 0;
  high = max;

  for (let char of string) {
    const mid = Math.floor((high + low) / 2);

    if (char === lower_char) {
      high = mid;
    } else if (char === upper_char) {
      low = mid;
    }
  }

  return low;
}

function day_5_part_1(input) {
  // Useful for part 2
  const all_seat_ids = [];

  // Keeping track of current highest id.
  let highest_id = 0;

  // Loop through every boarding pass
  for (i in input) {
    let row;
    let col;
    let id;

    // Step 1. Figure out the row number for the boarding pass. The first 7 characters will tell us the needed information.
    row = binary_partition(input[i].slice(0, 7), "F", "B", 128);

    // Step 2. Figure out the column number for the boarding pass.
    col = binary_partition(input[i].slice(7), "L", "R", 8);

    // Step 3. Figure out ID. Do this by multiplying row by 8 then adding the column.
    id = row * 8 + col;

    // Step 4. Check if this boarding passes id is higher than highest_id, if so set highest_id to this boarding passes id.
    if (id > highest_id) {
      highest_id = id;
    }

    // Push to our all seat ids array for use in part 2
    all_seat_ids.push(id);
  }

  return [highest_id, all_seat_ids];
}

function day_5_part_2(input) {
  let my_seat_id = 0;

  // Sort the array so we can compare values next to each other. Sort takes a function to determine how to sort each element.
  input.sort((a, b) => a - b);

  for (let i = 1; i < input.length - 1; i++) {
    // If we're at the last index and nothing was found.
    if (i === input.length - 1) {
      break;
    }

    // If the next index isnt the current index + 1, the current index + 1 must be our id.
    if (input[i + 1] !== input[i] + 1) {
      my_seat_id = input[i] + 1;
      break;
    }
  }

  return my_seat_id;
}

const part_1_output = day_5_part_1(input_array);
const part_2_output = day_5_part_2(part_1_output[1]);

console.log(`Part 1: ${part_1_output[0]}\nPart 2: ${part_2_output}`);

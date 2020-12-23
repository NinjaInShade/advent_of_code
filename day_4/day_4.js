const parse_file = require("../parse_file.js");

const input_array = parse_file("day_4", "day_4_input.txt", "\r\n\r\n");

function day_4_part_1(input) {
  // Variable we return at end counting the valid passports.
  let valid_passports = 0;

  // Loop through each passport
  for (i in input) {
    // We need to build a new array to split up the passport fields into individual elements so we can loop over them.
    const passport_fields = input[i].split(/\s+/);

    // We keep track of cid as this is optional.
    let has_cid = false;

    // Loop over each field to check if we have a "cid" field, which comes in handy for later validations.
    for (j in passport_fields) {
      if (passport_fields[j].substring(0, 3) === "cid") {
        has_cid = true;
      }
    }

    // If we have 8 fields ( all fields ) then it is a valid passport
    if (passport_fields.length === 8) {
      valid_passports += 1;
      continue;
    }

    // Else we check if the length is 7 and the only missing field is cid, which makes it valid.
    if (passport_fields.length === 7 && !has_cid) {
      valid_passports += 1;
      continue;
    }
  }

  return valid_passports;
}

function day_4_part_2(input) {
  return 0;
}

const part_1_output = day_4_part_1(input_array);
const part_2_output = day_4_part_2(input_array);

console.log(`Part 1: ${part_1_output}\nPart 2: ${part_2_output}`);

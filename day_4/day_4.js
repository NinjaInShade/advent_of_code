const run_validations = require("./validate_functions");

const parse_file = require("../parse_file.js");

const input_array = parse_file("day_4", "day_4_input.txt", "\r\n\r\n");

function day_4_part_1(input) {
  // Variables to keep track of amount of valid passports and the actual valid passports themselves for part 2.
  let valid_passports_amount = 0;
  let valid_passports_array = [];

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
      valid_passports_amount += 1;
      valid_passports_array.push(passport_fields);
      continue;
    }

    // Else we check if the length is 7 and the only missing field is cid, which makes it valid.
    if (passport_fields.length === 7 && !has_cid) {
      valid_passports_amount += 1;
      valid_passports_array.push(passport_fields);
      continue;
    }
  }

  return [valid_passports_amount, valid_passports_array];
}

function day_4_part_2(input) {
  // The input we recieve for this should be all the passports with all required fields. In this function we will validate each passports' fields to determine if the overall passport is actually valid.
  let valid_passports = 0;

  // First loop for each passport.
  for (i in input) {
    let invalid_fields = 0;

    // Second loop for it's fields, and to validate them. If any are invalid, that passports' overall validity is invalid.
    for (k in input[i]) {
      // Validates each field and returns 0 for valid and 1 for invalid field, then add it to the to the total invalid_fields for that passport.
      let is_field_valid = run_validations(input[i][k]);
      invalid_fields += is_field_valid;
    }

    // If there are no invalid fields, the passport is valid.
    if (invalid_fields === 0) {
      valid_passports += 1;
    }
  }

  return valid_passports;
}

const part_1_output = day_4_part_1(input_array);
const part_2_output = day_4_part_2(part_1_output[1]);

console.log(`Part 1: ${part_1_output[0]}\nPart 2: ${part_2_output}`);

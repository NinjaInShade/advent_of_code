const parse_file = require("../parse_file.js");

const input_array = parse_file("day_2", "day_2_input.txt");

function day_2_parse(string) {
  // Initial split parses data into an array of 3 elements. ["least-most", "letter:", "password"] - eg ["6-10", "s:", "sadvasdasfvas"]
  // This means i will have to parse each bit of data i need.
  const initial_split = string.split(" ");

  // least_most_parse gives an array of ["least", "most"] - eg ["6", "10"]. I set up this variable to not repeat code.
  const least_most_parse = initial_split[0].split("-");
  const least_occurences = least_most_parse[0];
  const most_occurences = least_most_parse[1];

  // Parsing letter and password via indexing.
  const letter = initial_split[1][0];
  const password = initial_split[2];

  // Return an object of this data.
  return {
    least_occurences,
    most_occurences,
    letter,
    password,
  };
}

function day_2_part_1(input) {
  // Data comes in the format "least-most letter: password" (eg. ["6-10 s: sadvasdasfvas"]), so i have to parse it first.

  let valid_passwords = 0;

  for (i in input) {
    let letter_counter = 0;
    const data = day_2_parse(input[i]);

    // Loop through each character in the password, if the character is the desired letter, we add one to the counter to keep track of how many times that letter comes up.
    for (j in data.password) {
      if (data.password[j] === data.letter) {
        letter_counter += 1;
      }
    }

    // Check if the iterations of the desired letter is between the guidlines. If so, it is a valid password and the valid_passwords variable increases by 1.
    if (letter_counter >= data.least_occurences && letter_counter <= data.most_occurences) {
      valid_passwords += 1;
    }
  }

  return valid_passwords;
}

function day_2_part_2(input) {
  // Data comes in the format "least-most letter: password" (eg. ["6-10 s: sadvasdasfvas"]), so i have to parse it first.

  let valid_passwords = 0;

  for (i in input) {
    const data = day_2_parse(input[i]);

    let first_index_is_letter = false;
    let second_index_is_letter = false;

    if (data.password[data.least_occurences - 1] === data.letter) {
      first_index_is_letter = true;
    }

    if (data.password[data.most_occurences - 1] === data.letter) {
      second_index_is_letter = true;
    }

    if (
      (first_index_is_letter === true && second_index_is_letter === false) ||
      (first_index_is_letter === false && second_index_is_letter === true)
    ) {
      valid_passwords += 1;
    }
  }

  return valid_passwords;
}

const part_1_output = day_2_part_1(input_array);
const part_2_output = day_2_part_2(input_array);

console.log(`Part 1: ${part_1_output}\nPart 2: ${part_2_output}`);

// Range util function to check if a number is in a range
function range_check(value, least, most) {
  if (parseInt(value) >= least && parseInt(value) <= most) {
    return 0;
  }

  return 1;
}

// (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
function ecl_validation(value) {
  // an array of all the valid values
  const valid_values = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];

  // Check if the value is included in the array of the valid values.
  if (valid_values.includes(value)) {
    return 0;
  }

  return 1;
}

// (Expiration Year) - four digits; at least 2020 and at most 2030.
function eyr_validation(value) {
  return range_check(value, 2020, 2030);
}

// (Height) - a number followed by either cm or in. If: (cm: least 150, most 193), (in: least 59, most 76).
function hgt_validation(value) {
  // The pure int value without the measurement at the end
  const int_value = parseInt(value.slice(0, -2));
  // The type of measurement (cm or in)
  const measurement = value.slice(-2);
  // Inch range check
  if (measurement === "in") {
    return range_check(int_value, 59, 76);
  }
  // Cm range check
  if (measurement === "cm") {
    return range_check(int_value, 150, 193);
  }
  // If measurement is not in/cm it isnt a valid height
  return 1;
}

// (Birth Year) - four digits; at least 1920 and at most 2002.
function byr_validation(value) {
  return range_check(value, 1920, 2002);
}

// (Issue Year) - four digits; at least 2010 and at most 2020.
function iyr_validation(value) {
  return range_check(value, 2010, 2020);
}

// (Passport ID) - a nine-digit number, including leading zeroes.
function pid_validation(value) {
  if (value.length === 9) {
    return 0;
  }

  return 1;
}

// (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
function hcl_validation(value) {
  const valid_chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
  console.log(value, "FIRST");

  if (value[0] !== "#" || value.slice(1).length !== 6) {
    return 1;
  }

  if (!valid_chars.includes(value[1])) {
    return 1;
  }
  if (!valid_chars.includes(value[2])) {
    return 1;
  }
  if (!valid_chars.includes(value[3])) {
    return 1;
  }
  if (!valid_chars.includes(value[4])) {
    return 1;
  }
  if (!valid_chars.includes(value[5])) {
    return 1;
  }
  if (!valid_chars.includes(value[6])) {
    return 1;
  }

  return 0;
}

module.exports = function run_validations(string) {
  // String is in format type:value
  const type = string.slice(0, 3);

  if (type == "eyr") {
    return eyr_validation(string.substring(4));
  }

  if (type == "hgt") {
    return hgt_validation(string.substring(4));
  }

  if (type == "ecl") {
    return ecl_validation(string.substring(4));
  }

  if (type == "byr") {
    return byr_validation(string.substring(4));
  }

  if (type == "iyr") {
    return iyr_validation(string.substring(4));
  }

  if (type == "pid") {
    return pid_validation(string.substring(4));
  }

  if (type == "hcl") {
    return hcl_validation(string.substring(4));
  }

  // Cid is ignored, so it's not an error.
  if (type == "cid") {
    return 0;
  }
};

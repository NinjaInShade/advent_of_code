const parse_file = require("../parse_file.js");

const input_array = parse_file("day_8", "day_8_input.txt", "\r\n");

function parse_instruction(string) {
  // Split data in 2
  const initial_split = string.split(" ");

  // Parse the initial split to 2 useful bits of information
  const command = initial_split[0];
  const sign = initial_split[1][0];
  const number = initial_split[1].slice(1);

  return [command, sign, number];
}

function day_5_part_1(input) {
  // Since a jmp command jumps past certain commands, we can use a while loop and control the index ourselves.
  let cmd_line = 0;
  let accumulator = 0;

  // Store every command so far.
  const ran_commands = [];

  // We use while to have control over which command(line) we read.
  while (cmd_line < input.length) {
    // Parse line
    const [command, sign, number] = parse_instruction(input[cmd_line]);

    // If this cmd has been ran before and we start going into an infinite loop, break.
    if (ran_commands.includes(`${command}${sign}${number}[${cmd_line}]`)) {
      break;
    }

    // If all is well push this current command to the array.
    ran_commands.push(`${command}${sign}${number}[${cmd_line}]`);

    if (command === "acc") {
      // Acc command
      if (sign === "+") {
        accumulator += parseInt(number);
      } else {
        accumulator -= parseInt(number);
      }

      cmd_line += 1;
    } else if (command === "jmp") {
      // Jump command
      if (sign === "+") {
        cmd_line += parseInt(number);
      } else {
        cmd_line -= parseInt(number);
      }
    } else {
      // Nop command
      cmd_line += 1;
    }
  }

  return accumulator;
}

function day_5_part_2(input) {
  return 0;
}

const part_1_output = day_5_part_1(input_array);
const part_2_output = day_5_part_2(input_array);

console.log(`Part 1: ${part_1_output}\nPart 2: ${part_2_output}`);

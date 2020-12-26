const parse_file = require("../parse_file.js");

const input_array = parse_file("day_7", "day_7_input.txt", "\r\n");

// Helper function to split the original input data into more useful manageable data.
function split_items(input) {
  // split line leaves us with an array. First index is the bag colour we're dealing with. The second index is what bags this bag contains. We can further parse this into its own array.
  const initial_split = input.split(" bags contain ");

  // The bag we're dealing with.
  const bag = `${initial_split[0].split(" ")[0]}_${initial_split[0].split(" ")[1]}`;

  // An array of the bags contained within the initial.
  const bags_contained_unparsed = initial_split[1].split(", ");
  const bags_contained = [];

  // This loop further splits them on the empty characters
  for (j in bags_contained_unparsed) {
    let temp_arr = bags_contained_unparsed[j].split(" ");
    bags_contained.push(`${temp_arr[1]}_${temp_arr[2]}`);
  }

  return [bag, bags_contained];
}

function day_7_part_1(input) {
  // We will use a set to store unique occurences of each bag colour, so we can store every unique bag colour that will fit a gold bag eventually.
  let bag_colours = new Set();
  let bag_count = 0;

  // First initial loop to find any bags that directly hold shiny gold
  for (i in input) {
    // We turn the set into an array just for use of looping over.
    bag_colours_arr = Array.from(bag_colours);

    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++");

    // Get the data we need from our split_items function
    const bag = split_items(input[i])[0];
    const bags_contained = split_items(input[i])[1];

    console.log(bag, bags_contained);

    // If the bag holds shiny_gold directly, we can add it to the bag colours.
    if (bags_contained.includes("shiny_gold")) {
      bag_colours.add(bag);
      bag_count += 1;
    }

    // Loop over items in the set, which contain bags that directly hold shiny gold bags.
    // If the current bag contains one of these, then its a valid bag colour so we add it to the set.
    for (k in bag_colours_arr) {
      console.log("SET COMPARISON ", bag_colours_arr[k], " ", bags_contained);
      if (bags_contained.includes(bag_colours_arr[k])) {
        bag_colours.add(bag);
        bag_count += 1;
      }
    }
  }

  console.log(bag_colours, bag_count);

  return bag_colours.size;
}

function day_7_part_2(input) {
  return 0;
}

const part_1_output = day_7_part_1(input_array);
const part_2_output = day_7_part_2(input_array);

console.log(`Part 1: ${part_1_output}\nPart 2: ${part_2_output}`);

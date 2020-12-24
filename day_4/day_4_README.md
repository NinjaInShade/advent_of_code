# Day 4 challenge.

[Day 4 challenge link](https://adventofcode.com/2020/day/4)

## Part 1

- Here is an example batch file containing four passports:

- ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
- byr:1937 iyr:2017 cid:147 hgt:183cm

- iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
- hcl:#cfa07d byr:1929

- hcl:#ae17e1 iyr:2013
- eyr:2024
- ecl:brn pid:760753108 byr:1931
- hgt:179cm

- hcl:#cfa07d eyr:2025 pid:166559648
- iyr:2011 ecl:brn hgt:59in

- The first passport is valid - all eight fields are present. The second passport is invalid - it is missing hgt (the Height field).
- The third passport is interesting; the only missing field is cid, so it looks like data from North Pole Credentials, not a passport at all! Surely, nobody would mind if you made the system temporarily ignore missing cid fields. Treat this "passport" as valid.
- The fourth passport is missing two fields, cid and byr. Missing cid is fine, but missing any other field is not, so this passport is invalid.

- Return how many many valid passports are in your batch file. Treat cid as optional

## Part 2

- You can continue to ignore the cid field, but each other field has strict rules about what values are valid for automatic validation:

- byr (Birth Year) - four digits; at least 1920 and at most 2002.
- iyr (Issue Year) - four digits; at least 2010 and at most 2020.
- eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
- hgt (Height) - a number followed by either cm or in:
- If cm, the number must be at least 150 and at most 193.
- If in, the number must be at least 59 and at most 76.
- hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
- ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
- pid (Passport ID) - a nine-digit number, including leading zeroes.
- cid (Country ID) - ignored, missing or not.

- Return the passports where all required fields are both present and valid according to the above rules.

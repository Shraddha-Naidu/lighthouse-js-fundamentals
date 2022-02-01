//log should read "Suzie is 32 years old." at the end
//function should calculate age based on birth year and current year
//

function ageCalculator (name, birthYear, currentYear) {
  var actualAge
  actualAge = currentYear - birthYear;
  return `${name} is ${actualAge} years old.`
}


console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));


//function ageCalculator(name, yearOfBirth, currentYear) { console.log(name + " is " + (return -yearOfBirth + currentYear) + " years old."); };
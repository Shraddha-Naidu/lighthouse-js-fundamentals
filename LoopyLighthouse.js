// Print numbers 100 to 200
//Multiples of 3 will be logged as Loopy
//Multiples of 4 will be logged as Lighthouse
//Multiples of 3 && 4 will be logged as LoopyLighthouse

for (var n = 100; n <= 200; n++) {
  if(n % 3 === 0 && n % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if (n % 3 === 0) {
    console.log("Loopy");
  } else if (n % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(n);
  }
}
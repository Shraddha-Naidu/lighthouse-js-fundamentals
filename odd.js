const isOdd  = function (num) {
  return num % 2 !== 0;
}
//The return will show that if divided by 2 and if there's not a 0 remainder then the number is odd

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
console.log("11 is odd: " + isOdd(11));
console.log("60 is odd: " + isOdd(60));
//The following should be logged: true, false, true, false
//Calculate how many containers can be shipped based on the fact that they will only ship full and at fiull capacity one container holds 100 bottles.
//This means that to determine the number of containers, the quantity will have to be divided by 100(x % 100 === 0)

let howManyHundreds = function (bottles) {
  return Math.floor(bottles/100);
  }

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);


//Remember to use variables within their scope for correct output and operators as needed.
//Had modulo operator been used the return line would read as follows:
//return(bottles - (bottles % 100))/ 100; --> This is because we're not being asked for the remainder but the number of cases so the remainder should be removed.
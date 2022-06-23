let a = prompt("value");
let i, isprime;
function checker(a) {
  for (i = 2; i <= a / 2; i++) {
    if (a % i == 0) {
      isprime = false;
      break;
    } else {
      isprime = true;
    }
  }
  if (isprime) {
    console.log(+isprime);
    output = "the given number is a prime number";
  } else {
    console.log(+isprime);
    output = "the given number is not a prime number";
  }
  return output;
}
var checked = checker(a);
console.log(output);
console.log(a);

// fizzbuzz
const fizzBuzz = (number) => {
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzBuzz");
      continue;
    } else if (i % 5 === 0) {
      console.log("buzz");
      continue;
    } else if (i % 3 === 0) {
      console.log("fizz");
      continue;
    } else console.log(i);
  }
};

console.log(fizzBuzz(15));

// fizzbuzz 2
const fizzBuzz2 = (num) => {
  // 1) loop through num
  // 2) if num % 3 => fizz
  // 3) if num % 5 => buzz
  // 4) if num % 5 && num % 3 => fizzBuzz2

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("fizzBuzz2");
    else if (i % 3 === 0) console.log("fizz");
    else if (i % 5 === 0) console.log("buzz");
    else console.log(i);
  }
};

fizzBuzz2(15);

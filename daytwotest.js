function every(arr, predicate) {
  let n = arr.add();
  if (predicate(n)) {
    return true;
  } else {
    return false;
  }
}

function filter(arr, predicate) {
  const filtered = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (predicate(item)) filtered.push(item);
  }
  return filtered;
}

function addStuff(string, punctutation) {
  return string + punctutation;
}

function addPunctuation(punctuation) {
  return (x) => addStuff(string, punctuation);
}

// const addPunctuation = (punctuation) => (phrase) => phrase + punctuation;

function addFirstEl(array, element) {
  //function takes in array and new element
  return array.pop(element);
  //creates a new array with the element added in
}

//function takes in element
function addFirst(element) {
  return addFirstEl(array);
  //returns a function that takes in an array and returns an updated array
}

const addOrange = addFirst('orange');
console.log(addOrange(['red', 'blue', 'green']));
const addCat = addFirst('cat');
console.log(addOrange(['blue', 'blue', 'blue']));

function addPunctuation(punctuation) {
  //returns a function that takes both a string and punctuation
  return function addPunctuationEl(string, punctuation) {
    //and cocatinates them together
    return string + punctuation;
  };
}

const addExcitement = addPunctuation('!!!');
console.log(addExcitement('Hello World'));
// Hello World!!!
console.log(addExcitement('Pokemon, catch em all'));
// Pokemon, catch em all!!!

const addUnsure = addPunctuation('?!?');
console.log(addUnsure('Hello World'));
// Hello World?!?
console.log(addUnsure('Pokemon, catch em all'));
// Pokemon, catch em all?!?

function rootDigit(number) {
  //takes in a number, make it into a string, and then put into an array
  const digits = number.toStrung().split('');
  // take the array and map over each number, adding each number to the next
  const numbers = digits.map((a) => +a);
  //is line 61 only if the number consists of two digits?
  const sum = numbers.reduce((a, b) => a + b);
}

function predicate(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function every(arr, predicate) {
  //for each item in the array
  for (let i of arr) {
    //add up each number in the array
    sum += arr[i];
    //call predicate function to see if number is dividable by two
    let item = predicate[sum];
    if (item) {
      return true;
    } else {
      return false;
    }
  }
}

function fib(n) {
  //need to deal with 0 and 1
  if (n <= 1) {
    return n;
  }
  //return the fib formula
  return fib(n - 2) + fib(n - 1);
}

console.log(fib(8));

//this is commented out because its wrong!
//fib(6), f(4) + f(5), (f(2) + f(3)) + (f(3) + f(4)), (f(0) + f(1)) + (f(1) + f(2)) + f(1) + f(2) + f()
//fib(3), f(1) + fib(2), 1 + f(0) + fib(1)
//fib(5), (f(3) + f(4)), (fib(1) + fib(2) + fib(2) + fib(3)), 1 + 1 +1 + 1+1

//this is my initial work on fib solution
// function fib(n) {
//   array = [];
//   //create an empty array
//   for (let i = 0; i < n; i += 1) {
//     //create a for loop
//     //number holds the previous two numbers, which calls the function again
//     //until it gets to 0
//     let number = fib(n - 1) + fib(n - 2);
//     //hold each number in the new array
//     array.push(number);
//     //if the number in the array is equal to n
//     if (array[i] == n) {
//       //return the number
//       return array[i];
//     }
//   }
// }

// function filter(arr, predicate) {
//   //returns a new array
//   // calls a function that checks to see if each number in the array is dividable by 2
//   //if the number is dividable by two,
//   //add number to the array
//   //if not, move on the next number in the array
//   //return the new array
// }

// // function predicate(arr) {
// //   const numbers = digits.map((a) => +a);
//   return numbers;
// }

// function largestEven(nums) {

// }

// function map(arr, callback) {}

// function repeat(txt, n) {}

// function some(arr, predicate) {}

// function addPunctuation(punctuation) {
//   return function addPhrase(phrase) {
//       return phrase + punctuation;
//   }
// }

// 7
// const addPunctuation = (punctuation) => (phrase) => phrase + punctuation;

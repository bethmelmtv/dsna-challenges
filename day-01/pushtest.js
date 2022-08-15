

export function push(arr, item) {
  arr.push(item);
  return arr;
}

export function fizzBuzz(number) {
    anArray =  []
    for(let i =1; i <= number, i+=1;) {
      if(i % 3 == 0) {
         anArray.push('Fizz')
      } if(i % 5 == 0) {
           anArray.push('Buzz')
      } if (i % 5==0 && i% 3 ==0){
        anArray.push('FizzBuzz')
    } else {
       anArray.push(i) }
    return anArray;
}

export function multiplesOfN(n) {
  anArray = []
  for(let i =n*2; i > n, i+=1;) {
    if (i % n == 0) {
      anArray.push(i)
    } else {
      return anArray;
    }
  }
}

function reverseWords(sentence) {
  sentence.split("").reverse().join("")
}

function titleCase(sentence) {
  sentence.split("").charAt(0).toUpperCase().join("")
}

function oddishOrEvenish(number) {
  let numberEl = number.split().add()
  if(numberEl % 2 == 0) {
    return 'Evenish'
  } else {
    return "Oddish"
  }
  
function at(arr, index) {
    return arr[index]
}

function anagrams(wordOne, wordTwo) {
  if (wordOne.length !== wordTwo) {
    return false
  } else {
    first = wordOne.split("").sort().join("")
    second = wordTwo.split("").sort().join("")
    if(first == second) {
      return true
    }
  }
}

// function uniqueString(strings) {
//   let anArray = []
//   words = strings.split("")
//   for (i in words) {
//     if (i )
//   }
//   if ()
//   for (word in strings) {
//     const letter = word.split("")
//     anArray.push(letter)
//     for (i in letter) {
//       if 
//     }
// }

// export function inventoryChecker(inventory, {itemName}) {
//   for(let i = 0; i < itemName, i+=1;) {
//     if (i > 5) {
//       return 'plenty of inventory'
//     } else {
//       return `running low on ${item}'
//   }
// }



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



// export function inventoryChecker(inventory, {itemName}) {
//   for(let i = 0; i < itemName, i+=1;) {
//     if (i > 5) {
//       return 'plenty of inventory'
//     } else {
//       return `running low on ${item}'
//   }
// }

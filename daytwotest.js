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

const addPunctuation = (punctuation) => (phrase) => phrase + punctuation;

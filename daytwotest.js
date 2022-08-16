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

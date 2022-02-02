// Solution 1:

function rangeOfNumbers(startNum, endNum) {
  if (startNum == endNum) {
    return [startNum];
  } else {
    var nos = rangeOfNumbers(startNum, endNum - 1);
    nos.push(endNum);
    return nos;
  }
}

// Solution 2

function rangeOfNumbers(startNum, endNum) {
  return startNum === endNum
    ? [endNum]
    : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
}

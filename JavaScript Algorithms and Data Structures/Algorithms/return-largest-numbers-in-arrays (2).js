function largestOfFour(arr) {
  const result = []

  for(let subarr of arr){
    result.push(Math.max(...subarr))
    // loop through sub arr
    // if curr subarr is > biggest, it is = biggest
  }
  console.log(result)
  return result
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
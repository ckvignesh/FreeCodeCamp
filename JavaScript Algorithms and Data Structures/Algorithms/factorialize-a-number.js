function factorialize(num) {
  // input a number
  // initialze a variable that holds the fact value with 1
  let fact = 1;
  for (let i=num; i>=1; i--){
    fact = i * fact
  }
  // multiply it with the number lesser than it till it reaches 1
  return fact;
}

console.log(factorialize(5));
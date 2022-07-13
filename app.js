// Q1. Falsy or Truthy?
function falsyOrTruthy(elem1, elem2) {
  return !elem1 ? elem1 : elem2
}

console.log(falsyOrTruthy(null, 50))

// Q2. Return the length of any given array
function arrLength(arr) {
  return arr.length
}

console.log(arrLength([1, 2, 3, 4]))

// Q3. Get the last element in an array
function lastElem(arr) {
  return arr[arr.length - 1]
}

console.log(lastElem([1, 2, 3, 4]))

// Q4. Find the sum of an array
function arrSum(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    // This is how you loop through every element in an array
    sum += arr[i]
  }
  return sum
}

console.log(arrSum([2, 4, 6]))

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

// Q5. Add up the numbers from a single number
function progressiveSum(num) {
  let sum = 0
  for (let i = 1; i <= num; i++) {
    sum += i
  }
  return sum
}

console.log(progressiveSum(3))

// Q6. Calculate the time
function calcTime(seconds) {
  let timerMinutes = Math.floor(seconds / 60)
  let timerSeconds = seconds % 60

  if (timerMinutes.toString().length === 1) {
    timerMinutes = "0" + timerMinutes
  }

  return timerMinutes + ":" + timerSeconds
}

console.log(calcTime(70))

// Q7. Find the largest number
function getMax(arr) {
  let max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    arr[i] > max && (max = arr[i])
  }
  return max
}

console.log(getMax([12, -52, 47, 98, 33]))

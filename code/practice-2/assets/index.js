function deduplicate(arr) {
  let isExist = function(arr, x) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === x) return true;
    }
    return false;
  };

  let ans = [];
  arr.forEach(function(element) {
    if (!isExist(ans, element)) ans.push(element);
  });
  return ans;
}
function sum(ans) {
  let sum = 0
  for ( let j = 0; j < ans.length; j++) {
    sum+= ans[j]
  }
  return sum;
}
let arr = [1, 50, 28, 2, 5, 103, 496, 105, 108, 25, 36, 6, 50, 53, 289, 1003, 472, 105, 3, 899, 692, 1000, 289, 103]
let ans = deduplicate(arr);

console.log(arr);
console.log(ans);
console.log(`sum = ${sum(ans)}`)

// find odd numbers
function odd(arr) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1){
      ans.push(arr[i]);
    }
  };
  return ans;
}

// find even numbers
function even(arr) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0){
      ans.push(arr[i]);
    }
  };
  return ans;
}
console.log (`even : ${even(arr)}`)
console.log (`odd : ${odd(arr)}`)

//sort array ascending or descending

arr.sort(function(a, b) {return a - b})
console.log(`ascending : ${arr}`)
arr.sort(function(a , b) {return b - a})
console.log(`descending : ${arr}`)

//prime number
function primeNumber(arr) {
  let ans = [] 
  let k = 0
  for (let i = 0; i < arr.length; i++) {
    for ( let j = 2;j < arr[i];j++) {
      if ( arr[i] % j == 0) {
        k++
      }
    }
    if ( k == 0) {
      ans.push(arr[i])
    }
    k = 0
  }
  return ans
}
console.log(`Prime Number : ${primeNumber(arr)}`)

//perfect number
function total(arr) {
  let sum = 0
  let ans = []
  for ( let i = 0; i < arr.length - 1;i++) {
    for(let j = 1 ; j < arr[i];j++) {
      if ( arr[i] % j == 0) {
        sum+=j
      }
    }
    if(sum == arr[i]) {
      ans.push(arr[i])
    }
    sum = 0
  }
  return ans
}

console.log(`Perfect Number : ${total(arr)}`)












// An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.
// Your goal is to find that missing element.
// Write a function:
// function solution(A);
// that, given an array A, returns the value of the missing element.

function solution(A) {
  //sort the array
  A.sort((a, b) => a - b);
  let len = A.length;

  //validate array not empty
  if (len == 0) {
    return 1;
  }

  let firstNum = A[0];
  
  //validate single length or missing first/last
  if (firstNum != A[len - 1] - len){
    if (firstNum != 1) {
      return firstNum - 1;
    } else {
      return A[len - 1] + 1;
    }
  }

  //binary search
  let left = 0;
  let right = len - 1;
  let mid = 0;
  while (left <= right) {
    //get cur mid
    mid = parseInt((left + right) / 2);
    //check if mid is what it should be
    if (A[mid] == mid + firstNum) {
      //if so, continue to the right
      left = mid + 1;
    } else {
      //continue to the left
      right = mid - 1;
    }
  }

  return A[left] - 1;
}

//validate empty array
console.log("expect 1. got: " + solution([]));
console.log(solution([]) == 1);
console.log("");

//validate single length array
console.log("expect 2. got: " + solution([1]));
console.log(solution([1]) == 2);
console.log("");

//validate single length non 1
console.log("expect 3. got: " + solution([4]));
console.log(solution([4]) == 3);
console.log("");

//validate 2 length array with missing middle
console.log("expect 7. got: " + solution([6, 8]));
console.log(solution([6, 8]) == 7);
console.log("");

//validate 2 length array with missing end
console.log("expect 6. got: " + solution([7, 8]));
console.log(solution([7, 8]) == 6);
console.log("");

//validate 5 length array with missing end
console.log("expect 6. got: " + solution([1, 2, 3, 4, 5]));
console.log(solution([1, 2, 3, 4, 5]) == 6);
console.log("");

//validate 8 length array with missing high
console.log("expect 11. got: " + solution([4, 10, 12, 5, 6, 7, 9, 8]));
console.log(solution([4, 10, 12, 5, 6, 7, 9, 8]) == 11);
console.log("");

//validate 8 length array with missing first
console.log("expect 3. got: " + solution([11, 10, 4, 5, 6, 7, 9, 8]));
console.log(solution([11, 10, 4, 5, 6, 7, 9, 8]) == 3);
console.log("");

//validate 8 length array with missing mid
console.log("expect 5. got: " + solution([1, 2, 4, 3, 6, 7, 9, 8]));
console.log(solution([1, 2, 4, 3, 6, 7, 9, 8]) == 5);
console.log("");

//validate higher numbers
console.log("expect 96. got: " + solution([99, 98, 97, 95, 94, 93, 92, 91]));
console.log(solution([99, 98, 97, 95, 94, 93, 92, 91]) == 96);

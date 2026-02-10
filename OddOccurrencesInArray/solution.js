// A non-empty array A consisting of N integers is given. The array contains an odd number of elements,
// and each element of the array can be paired with another element that has the same value,
// except for one element that is left unpaired.

function solution(A) {
    // if we XOR all the elements together,
    // the pairs will cancel each other out and we will be left with the unpaired element.
    let result = 0;
    for (let i = 0; i < A.length; i++) {
        result ^= A[i];
    }
    return result;
}


//testing multiple repeating integers
console.log("expecting 10478. got: " + solution([9, 3, 9, 3, 9, 7, 9, 7, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10478]));
console.log(solution([9, 3, 9, 3, 9, 7, 9, 7, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10478]) == 10478)


//testing large array
console.log("")
console.log("expecting 9. got: " + solution([7, 3, 7, 5, 9, 7, 11, 3, 7, 13,
7, 5, 3, 7, 9, 7, 3, 11, 7, 5,
  7, 9, 3, 7, 13, 7, 3, 5, 7, 9,
  11, 7, 3, 7, 5, 7, 9, 3, 7, 11,
  7, 5, 3, 7, 9, 7, 3, 13, 7, 5,

  7, 9, 3, 7, 11, 7, 5, 3, 7, 9,
  7, 3, 5, 7, 9, 11, 7, 3, 7, 5,
  7, 9, 3, 7, 13, 7, 5, 3, 7, 9,
  11, 7, 3, 7, 5, 9, 7, 3, 7, 11,

  7, 5, 3, 7, 9, 7, 3, 5, 7, 9,
  7, 11, 3, 7, 5, 7, 9, 3, 7, 13,
  7, 5, 3, 7, 9, 11, 7, 3, 7, 5,

  7, 9, 3, 7, 11, 7, 5, 3, 7, 9,
  7, 3, 5, 7, 9, 13, 7, 3, 7, 5,

  7, 9, 3, 7, 11, 7, 5, 3, 7, 9,
  7, 3, 5, 7, 9, 11, 7, 3, 7, 5,

  7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
  7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
  7]));
console.log(solution([7, 3, 7, 5, 9, 7, 11, 3, 7, 13,
  7, 5, 3, 7, 9, 7, 3, 11, 7, 5,
  7, 9, 3, 7, 13, 7, 3, 5, 7, 9,
  11, 7, 3, 7, 5, 7, 9, 3, 7, 11,
  7, 5, 3, 7, 9, 7, 3, 13, 7, 5,

  7, 9, 3, 7, 11, 7, 5, 3, 7, 9,
  7, 3, 5, 7, 9, 11, 7, 3, 7, 5,
  7, 9, 3, 7, 13, 7, 5, 3, 7, 9,
  11, 7, 3, 7, 5, 9, 7, 3, 7, 11,

  7, 5, 3, 7, 9, 7, 3, 5, 7, 9,
  7, 11, 3, 7, 5, 7, 9, 3, 7, 13,
  7, 5, 3, 7, 9, 11, 7, 3, 7, 5,

  7, 9, 3, 7, 11, 7, 5, 3, 7, 9,
  7, 3, 5, 7, 9, 13, 7, 3, 7, 5,

  7, 9, 3, 7, 11, 7, 5, 3, 7, 9,
  7, 3, 5, 7, 9, 11, 7, 3, 7, 5,

  7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
  7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
  7]) == 9)

//testing a single int array
console.log("");
console.log("expecting 1. got: " + solution([1]));
console.log(solution([1]) == 1)

//testing a 3 int array
console.log("");
console.log("expecting 3. got: " + solution([1, 3, 1]));
console.log(solution([1, 3, 1]) == 3)
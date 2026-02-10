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
    console.log(result);
    return result;
}

solution([9, 3, 9, 3, 9, 7, 9, 7, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10478]);

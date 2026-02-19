// A small frog wants to get to the other side of a river. The frog is initially located on one bank of the river (position 0) and wants to get to the opposite bank (position X+1). Leaves fall from a tree onto the surface of the river.
// You are given an array A consisting of N integers representing the falling leaves. A[K] represents the position where one leaf falls at time K, measured in seconds.
// The goal is to find the earliest time when the frog can jump to the other side of the river. The frog can cross only when leaves appear at every position across the river from 1 to X (that is, we want to find the earliest moment when all the positions from 1 to X are covered by leaves). You may assume that the speed of the current in the river is negligibly small, i.e. the leaves do not change their positions once they fall in the river.

function notSolution(X, A) {
    //my initial thoughts. After reading about the 100% solution, indesOx() is too expensive for large permutations.
    //initialize number of seconds to 0
    let numSeconds = 0;

    //initialize location in array to -1
    let locInArr = 0;

    //if there aren't enough positions in the array, return -1
    if (A.length < X) return -1;

    //loop for  1 <= i <= X
    for (i = 1; i <= X; i++){
        //for each i, find location in array
        locInArr = A.indexOf(i);
        //console.log("loc of " + i + " in array: " + locInArr)
        //if -1, return -1
        
        // if position > numberOfSeconds set number of seconds = position
        if (locInArr > numSeconds) {
            numSeconds = locInArr;
        }
        if (locInArr == -1){
            console.log("number of loops: " + (i-1).toString());
            return -1;
        }
    }
    //return numberOfSeconds + 1
    console.log("number of loops: " + (i-1).toString());
    return numSeconds;
}

function solution(X, A){
    // create a set to check each jump required
    const foundJumps = new Set();
    
    //if array isn't long enough, don't bother
    if (A.length < X) {
        return -1;
    } 

    // for each array element
    for (let numSeconds = 0; numSeconds < A.length; numSeconds++) {
        const position = A[numSeconds];

        // add jumps that are less that the rivers width
        if (position <= X) {
            foundJumps.add(position);
        }

        // when we've found all the jumps, return the numSeconds
        if (foundJumps.size == X) {
            return numSeconds; 
        }
    }

    // If we never find all the jumps. return -1
    return -1;
}

function validate(A, B, C, D) {
    let startTime
    let result
    let msRun

    console.log("testing " + A)
    startTime = Date.now()
    console.log("expect " + B.toString() + ". got: " + solution(C, D))
    console.log("milliseconds : " + (Date.now() - startTime).toString())
    console.log(B == solution(C, D))
    console.log("");
}


//test empty array
validate("empty array", -1, 1, [])

//test too short of an array
validate("too short of an array", -1, 2, [1])

//test array without last number
validate("array without last number", -1, 6, [1, 2, 1, 3, 1, 4, 1, 5, 1])

//test array without first number
validate("array without first number", -1, 6, [2, 3, 2, 4, 2, 5, 2, 6, 2])

//test array with 10 bogus numbers to start
validate("array with 10 bogus numbers to start", 15, 6, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 6])

//test array with 10 bogus numbers at end
validate("array with 10 bogus numbers at end", 5, 6, [1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6])

//test simple array with just the numbers
validate("simple array with just the numbers", 5, 6, [1, 2, 3, 4, 5, 6])

//test simple array with just the numbers backwards
validate("simple array with just the numbers backwards", 5, 6, [6, 5, 4, 3, 2, 1])


let N = 0;
let largeArray = []

//test a large array missing a number in the middle
N = 10_000_000;
largeArray = Array.from({length: N}, (_, i) => i + 1);
largeArray.splice(400_000,1)
validate("a 10,000,000 item array missing a number in the middle", -1, N, largeArray)

//test a large array missing a number in the middle
N = 10_000_000;
largeArray = Array.from({length: N}, (_, i) => i + 1);
largeArray.splice(0,1)
validate("a 10,000,000 item array missing a number at the start", -1, N, largeArray)


//test a large array with success
N = 10_000_000;
largeArray = Array.from({length: N}, (_, i) => i + 1);
validate("a 10,000,000 with all numbers", N-1, N, largeArray)


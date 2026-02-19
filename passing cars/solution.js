// A non-empty array A consisting of N integers is given. The consecutive elements of array A represent consecutive cars on a road.

// Array A contains only 0s and/or 1s:

// 0 represents a car traveling east,
// 1 represents a car traveling west.
// The goal is to count passing cars. We say that a pair of cars (P, Q), where 0 ≤ P < Q < N, is passing when P is traveling to the east and Q is traveling to the west.

function solution(A) {

    //track how many eastbound cars we currently have
    let eastbound = 0;

    //track passes
    let passes = 0

    //limit to 1,000,000,000
    const PASS_LIMIT = 1_000_000_000;

    //loop the array
    for (i = 0; i < A.length; i++) {
        if (A[i] == 0) {
            //increment eastbound cars
            eastbound++;
        } else {
            //add current eazstbound car count to passes
            passes += eastbound;
            if (passes > PASS_LIMIT) return -1
        }
    }

    return passes


}

function validate(A, B, C){
    let startTime = 0;
    let result
    let msRun
    
    console.log("Testing " + A);
    startTime = Date.now()
    result = solution(C)
    msRun = (Date.now() - startTime).toString()
    console.log("expect " + B.toString() + ". got: " + result)
    console.log("milliseconds in solution: " + msRun)
    console.log(B == result)
    console.log("");

}

//test for a single eastbound car and nothing else
validate("a single eastbound car.", 0, [0])

//test for a single westbound car and nothing else
validate("a single westbound car.", 0, [1])

//test for a single westbound car and 5 eastbound cars
validate("a single westbound car and 5 eastbound cars.", 0, [1, 0, 0, 0, 0, 0])

//test for a single eastbound car and 5 westbound cars
validate("a single eastbound car and 5 westbound cars.", 5, [0, 1, 1, 1, 1, 1])

//test for 20 alternating cars starting with east
validate("20 alternating cars starting with east", 55, [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1])

//test for 20 alternating cars starting with west
validate("20 alternating cars starting with west", 45, [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0])

//test a 500 length array
let N = 500;
// Create a typed array for speed
let largeArray = new Uint8Array(N);
for (let i = 0; i < N; i++) {
    // Math.random() returns [0, 1), so Math.round gives 0 or 1
    largeArray[i] = Math.round(Math.random());
}
validate("a random assortment of 1s and 0s for efficiency. not for correctness", -1, largeArray)

//test a 100,000 length array
N = 100_000;
// Create a typed array for speed
largeArray = new Uint8Array(N);
for (let i = 0; i < N; i++) {
    // Math.random() returns [0, 1), so Math.round gives 0 or 1
    largeArray[i] = Math.round(Math.random());
}
validate("a random assortment of 1s and 0s for efficiency. not for correctness. will almost certainly go over limit though", -1, largeArray)
//A non-empty array A consisting of N integers is given.
//A permutation is a sequence containing each element from 1 to N once, and only once.

function NotSolution(A) {
    //this is the solution I came up with initially
    //after reading the gold solutions, A.sort() combined with converting to a set adds iterations and complexity that aren't needed
    //the funny thing is that running the below tests I'm consistently getting lower complete times with this solution than the "gold" solution.
    //when prompted, Gemini indicated this is due to the following

    // 1. The "Small Data" Trap
    // Big O notation only describes how time grows as the input size 
    // approaches infinity.
    // For small arrays (e.g., 10 to 1,000 elements), the overhead of creating a Set object (allocating memory, hashing values, managing the hash table internally) is often more expensive than the highly optimized C++ code behind Array.prototype.sort().
    // Modern engines like V8 use Timsort or Quicksort, which are extremely fast for small datasets because they leverage "spatial locality" (keeping data close together in CPU cache).
    // 2. Allocation & Garbage Collection
    // Set Solution: Every time you run the test, you are creating a new Set object. Allocating memory for a Set and then garbage collecting it later takes time.
    // Sort Solution: You are sorting the array in place (or at least within the same memory block). V8 is incredibly good at optimizing simple loops and primitive array operations.
    // 3. The "Dense Array" Optimization
    // V8 categorizes arrays. If your array contains only small integers, it is stored as a "Packed Smi (Small Integer) Array."
    // Accessing A[i] in a packed array is nearly instantaneous.
    // Hashing that same integer into a Set involves a mathematical function and checking for collisions, which is much more CPU work per element.


    //sort the array
    A.sort((a, b) => a - b);

    if (A[0] != 1 || A[A.length - 1] != A.length) {
        //doesn't start at 1 or end at array length, cant be a permutation
        return 0;
    }
    //convert the array to a set
    const arrSet = new Set(A);

    //check the set length and array length are the same
    if (arrSet.size != A.length) {
        //set and array are different lengths. There was a duplicate number. not a permutation
        return 0;
    }

    return 1;
}

function solution(A){
    //gold solution
    const N = A.length;
    const seen = new Set();

    for (let i = 0; i < N; i++) {
        const num = A[i];

        // 1. If the number is outside the range [1..N], it's not a permutation
        if (num < 1 || num > N) return 0;

        // 2. If we've seen this number before, it's not a permutation (duplicate)
        if (seen.has(num)) return 0;

        seen.add(num);
    }

    // 3. If all N unique numbers within [1..N] are present, it's a permutation
    return seen.size === N ? 1 : 0;
}

function superSolution(A) {
    //note from gemini, don't use this on arrays that can exceed memory allocation limits.
    const N = A.length;
    // Uses 1 byte per element - extremely memory efficient
    const seen = new Uint8Array(N + 1); 

    for (let i = 0; i < N; i++) {
        const num = A[i];
        if (num < 1 || num > N || seen[num] === 1) return 0;
        seen[num] = 1;
    }
    return 1;
}

function validate(A, B, C){
    let startTime
    let result
    let msRun
    
    console.log("Testing " + A);
    console.log("testing solution()")
    startTime = Date.now()
    result = solution(C)
    msRun = (Date.now() - startTime).toString()
    console.log("expect " + B.toString() + ". got: " + result)
    console.log("milliseconds in solution: " + msRun)
    console.log(B == result)
    console.log("");
    console.log("testing NotSolution()")
    startTime = Date.now()
    result = NotSolution(C)
    msRun = (Date.now() - startTime).toString()
    console.log("expect " + B.toString() + ". got: " + result)
    console.log("milliseconds in solution: " + msRun)
    console.log(B == result)
    console.log("");
    console.log("testing superSolution()")
    startTime = Date.now()
    result = superSolution(C)
    msRun = (Date.now() - startTime).toString()
    console.log("expect " + B.toString() + ". got: " + result)
    console.log("milliseconds in solution: " + msRun)
    console.log(B == result)
    console.log("");
    console.log("");
    console.log("");

}

//test empty array
validate("an empty array", 0, [])

//test a single digit array
validate("a single digit array of 1", 1, [1])

//test a single digit array other than 1
validate("a single digit array of other than 1", 0, [101])

//test a two digit array with success
validate("a two digit array of [1, 2]", 1, [1, 2])

//test a two digit array that is missing a middle number
validate("a two digit array that is missing a middle number", 0, [1, 3])

//test a two digit array that doesn't start with 1
validate("a two digit array that doesn't include 1", 0, [10001, 10000])

let N = 0;
let largeArray = []

//test a large array missing a number in the middle
N = 10_000_000;
largeArray = Array.from({length: N}, (_, i) => i + 1);
largeArray.splice(400_000,1)
validate("a 10,000,000 item array missing a number in the middle", 0, largeArray)

//test a large array with success
N = 10_000_000;
largeArray = Array.from({length: N}, (_, i) => i + 1);
validate("a 10,000,000 item array with success", 1, largeArray)


//test a large array with success
N = 10_000_000;
largeArray = Array.from({length: N}, (_, i) => i + 1);
largeArray.splice(0,1)
validate("a 10,000,000 item array that doesn't include 1", 0, largeArray)


N = 10_000_000;
largeArray = Array.from({length: N}, (_, i) => i + 1);
// Shuffle the array so sort has work to do
largeArray.sort(() => Math.random() - 0.5);

//validate the large array 
validate("large shuffled array", 1, largeArray)
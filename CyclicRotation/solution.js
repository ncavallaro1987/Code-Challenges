function badSolution(A, K) {
  //Copilot typeahead wrote this code. It is not a good solution to the problem, but it does work.  
  //rotate the array K times. Each time, remove the last element and add it to the front of the array.
  let rotatedArray = A.slice()
  for (let i = 0; i < K; i++) {
    let lastElement = rotatedArray.pop();
    rotatedArray.unshift(lastElement);
  }
  return rotatedArray;
}

function slightlyBetterSolution(A, K) {
    // this is slightly better. It prevents running extra cycles if the array is already in the 
    // correct order after K rotations. For example, if the array has 4 elements and K is 4, 
    // then the array will be the same after 4 rotations as it is before. 
    // Similarly, if all elements in the array are the same, then the array will be the same after any number of rotations as it is before.
    // It does have the problem though that it will still run K cycles if the array has 4 elements and K is 8, even though the array will be 
    // the same after 8 rotations as it is before, and that it will take an unnecessarily long time if K is greater than the length of the array.
  let rotatedArray = A.slice()

  if (rotatedArray.length == K || rotatedArray.every((val) => val === rotatedArray[0])) {
    //do nothing. The array will be the same after K rotations as it is before.
  } else {
    //rotate the array K times. Each time, remove the last element and add it to the front of the array.
    for (let i = 0; i < K; i++) {
      let lastElement = rotatedArray.pop();
      rotatedArray.unshift(lastElement);
    }
  }
  return rotatedArray;
}

function solution(A, K) {
    // This is the best solution I can come up with right now.

    // first lets grab the array length and the remainder of K divided by the array length. 
    // This will give us the number of rotations we actually need to do, since if K is greater than the array length, 
    // we will end up in the same position after K rotations as we would after K mod array length rotations.
    let arrayLength = A.length;
    let rotationsNeeded = K % arrayLength;

    if (rotationsNeeded === 0) {
        return A;
    }

    // slice the array into two parts. 
    // the last rotationsNeeded elements 
    // and the first arrayLength - rotationsNeeded elements. 
    // Then concatenate them in the opposite order.
    // This does mean we're still operating on the array even if it's empty, 
    // or the elements are all the same, 
    // but since we are only performing a move once it's far less expensive than the other solutions.
    let rotatedArray = A.slice(-rotationsNeeded).concat(A.slice(0, arrayLength - rotationsNeeded));
    return rotatedArray;
}

function validate(A, B, C, D){
    let startTime
    let result
    let msRun
    
    console.log("Testing " + A);

    console.log("testing badSolution()")
    startTime = Date.now()
    result = badSolution(C, D).splice(0, 8).join(', ') + "..."
    msRun = (Date.now() - startTime).toString()
    console.log("expect " + B.toString() + ". got: " + result)
    console.log("milliseconds in badSolution: " + msRun)
    console.log(B == result)
    console.log("");

    console.log("testing slightlyBetterSolution()")
    startTime = Date.now()
    result = slightlyBetterSolution(C, D).splice(0, 8).join(', ') + "..."
    msRun = (Date.now() - startTime).toString()
    console.log("expect " + B.toString() + ". got: " + result)
    console.log("milliseconds in slightlyBetterSolution: " + msRun)
    console.log(B == result)
    console.log("");
    
    console.log("testing solution()")
    startTime = Date.now()
    result = solution(C, D).splice(0, 8).join(', ') + "..."
    msRun = (Date.now() - startTime).toString()
    console.log("expect " + B.toString() + ". got: " + result)
    console.log("milliseconds in solution: " + msRun)
    console.log(B == result)
    console.log("");

}
let N = 0;
let testArray = []

//test empty array
validate("[], 20", "", [], 20)

//test single digit array
validate("[4], 20", 4, [4], 20)

//test 8 digit array with 8 rotations
N = 8;
testArray = Array.from({length: N}, (_, i) => i + 1);
validate("8 digit array with 8 rotations", "1, 2, 3, 4, 5, 6, 7, 8...", testArray, N)

//test 8 digit array with 4 rotations
N = 8;
testArray = Array.from({length: N}, (_, i) => i + 1);
validate("8 digit array with 4 rotations", "5, 6, 7, 8, 1, 2, 3, 4...", testArray, N/2)


//test 8 digit array with 12 rotations
N = 8;
testArray = Array.from({length: N}, (_, i) => i + 1);
validate("8 digit array with 4 rotations", "5, 6, 7, 8, 1, 2, 3, 4...", testArray, N*1.5)


//test 250 digit array with 150254 rotations
N = 250;
testArray = Array.from({length: N}, (_, i) => i + 1);
validate("250 digit array with 150254 rotations", "247, 248, 249, 250, 1, 2, 3, 4...", testArray, 150254)


//test 250 digit array with 150254 rotations
N = 10_000_000;
testArray = Array.from({length: N}, (_, i) => i + 1);
validate("10,000,000 digit array with 35,150,254 rotations", "9999966, 9999967, 9999968, 9999969, 9999970, 9999971, 9999972, 9999973...", testArray, 35,150,254)

//CAUTION: RUNNING THE NEXT TEST ON THE NON OPTIMAL SOLUTIONS MAY TAKE A FWE MINUTES, AS THE NON OPTIMAL SOLUTIONS TAKE OVER 30 SECONDS TO RUN
N = 100_000_000;
testArray = Array.from({length: N}, (_, i) => i + 1);
validate("100,000,000 digit array with 350,150,254 rotations", "99999651, 99999652, 99999653, 99999654, 99999655, 99999656, 99999657, 99999658...", testArray, 350,150,254)
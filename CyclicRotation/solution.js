function badSolution(A, K) {
  //Copilot typeahead wrote this code. It is not a good solution to the problem, but it does work.  
  //rotate the array K times. Each time, remove the last element and add it to the front of the array.
  for (let i = 0; i < K; i++) {
    let lastElement = A.pop();
    A.unshift(lastElement);
  }
  console.log(A);
}

function slightlyBetterSolution(A, K) {
    // this is slightly better. It prevents running extra cycles if the array is already in the 
    // correct order after K rotations. For example, if the array has 4 elements and K is 4, 
    // then the array will be the same after 4 rotations as it is before. 
    // Similarly, if all elements in the array are the same, then the array will be the same after any number of rotations as it is before.
    // It does have the problem though that it will still run K cycles if the array has 4 elements and K is 8, even though the array will be 
    // the same after 8 rotations as it is before, and that it will take an unnecessarily long time if K is greater than the length of the array.
  if (A.length == K || A.every((val) => val === A[0])) {
    //do nothing. The array will be the same after K rotations as it is before.
  } else {
    //rotate the array K times. Each time, remove the last element and add it to the front of the array.
    for (let i = 0; i < K; i++) {
      let lastElement = A.pop();
      A.unshift(lastElement);
    }
  }
  console.log(A);
}

function solution(A, K) {
    // This is the best solution I can come up with right now.

    // first lets grab the array length and the remainder of K divided by the array length. 
    // This will give us the number of rotations we actually need to do, since if K is greater than the array length, 
    // we will end up in the same position after K rotations as we would after K mod array length rotations.
    let arrayLength = A.length;
    let rotationsNeeded = K % arrayLength;

    if (rotationsNeeded === 0) {
        console.log(A);
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
    console.log(rotatedArray);
    return rotatedArray;
}
solution([1, 0, 4, 7], 3);

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

//test empty array
console.log("testing [], 20");
console.log("expecting empty. got " + solution([], 20).join(', '));
console.log(solution([], 20).join(', ') == "");


//test single digit array
console.log("");
console.log("testing [4], 20");
console.log("expecting 4. got " + solution([4], 20).join(', '));
console.log(solution([4], 20).join(', ') == "4");

//test 8 digit array with 8 rotations
console.log("");
console.log("testing [1, 2, 3, 4, 5, 6, 7, 8], 8");
console.log("expecting 1, 2, 3, 4, 5, 6, 7, 8. got " + solution([1, 2, 3, 4, 5, 6, 7, 8], 8).join(', '));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 8).join(', ') == "1, 2, 3, 4, 5, 6, 7, 8");

//test 8 digit array with 4 rotations
console.log("");
console.log("testing [1, 2, 3, 4, 5, 6, 7, 8], 4");
console.log("expecting 5, 6, 7, 8, 1, 2, 3, 4. got " + solution([1, 2, 3, 4, 5, 6, 7, 8], 4).join(', '));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 4).join(', ') == "5, 6, 7, 8, 1, 2, 3, 4");


//test 8 digit array with 12 rotations
console.log("");
console.log("testing [1, 2, 3, 4, 5, 6, 7, 8], 12");
console.log("expecting 5, 6, 7, 8, 1, 2, 3, 4. got " + solution([1, 2, 3, 4, 5, 6, 7, 8], 12).join(', '));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 12).join(', ') == "5, 6, 7, 8, 1, 2, 3, 4");

//test 250 digit array with 150254 rotations
console.log("");
console.log("testing [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12...], 12");
console.log("expecting 247, 248, 249, 250, 1, 2, 3, 4, 5... got " + solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
  71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
  81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
  91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
  101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
  111, 112, 113, 114, 115, 116, 117, 118, 119, 120,
  121, 122, 123, 124, 125, 126, 127, 128, 129, 130,
  131, 132, 133, 134, 135, 136, 137, 138, 139, 140,
  141, 142, 143, 144, 145, 146, 147, 148, 149, 150,
  151, 152, 153, 154, 155, 156, 157, 158, 159, 160,
  161, 162, 163, 164, 165, 166, 167, 168, 169, 170,
  171, 172, 173, 174, 175, 176, 177, 178, 179, 180,
  181, 182, 183, 184, 185, 186, 187, 188, 189, 190,
  191, 192, 193, 194, 195, 196, 197, 198, 199, 200,
  201, 202, 203, 204, 205, 206, 207, 208, 209, 210,
  211, 212, 213, 214, 215, 216, 217, 218, 219, 220,
  221, 222, 223, 224, 225, 226, 227, 228, 229, 230,
  231, 232, 233, 234, 235, 236, 237, 238, 239, 240,
  241, 242, 243, 244, 245, 246, 247, 248, 249, 250], 150254).join(', '));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
  71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
  81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
  91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
  101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
  111, 112, 113, 114, 115, 116, 117, 118, 119, 120,
  121, 122, 123, 124, 125, 126, 127, 128, 129, 130,
  131, 132, 133, 134, 135, 136, 137, 138, 139, 140,
  141, 142, 143, 144, 145, 146, 147, 148, 149, 150,
  151, 152, 153, 154, 155, 156, 157, 158, 159, 160,
  161, 162, 163, 164, 165, 166, 167, 168, 169, 170,
  171, 172, 173, 174, 175, 176, 177, 178, 179, 180,
  181, 182, 183, 184, 185, 186, 187, 188, 189, 190,
  191, 192, 193, 194, 195, 196, 197, 198, 199, 200,
  201, 202, 203, 204, 205, 206, 207, 208, 209, 210,
  211, 212, 213, 214, 215, 216, 217, 218, 219, 220,
  221, 222, 223, 224, 225, 226, 227, 228, 229, 230,
  231, 232, 233, 234, 235, 236, 237, 238, 239, 240,
  241, 242, 243, 244, 245, 246, 247, 248, 249, 250], 150254).join(', ') == "247, 248, 249, 250, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246");
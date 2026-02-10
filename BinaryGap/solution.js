// A binary gap within a positive integer N is any maximal 
// sequence of consecutive zeros that is surrounded by ones 
// at both ends in the binary representation of N.

function solution(N) {
    const binaryString = N.toString(2);

    //find first instance of 0
    let posFirstZero = binaryString.indexOf("0");

    //find first instance of 1 affter the first 0
    let posFirstOne =  binaryString.indexOf("1", posFirstZero+1);

    //store length of binary string
    let binStrLen = binaryString.length;

    //initialize the length of 0s to 0
    let maxZeroLen = 0;

    //sanity check in case you somehow manage to break the other logic the loop will exit at the end of the binary string
    let i = 1
    while (posFirstOne < binStrLen && posFirstZero < binStrLen && posFirstOne >= 0 && posFirstZero >= 0 && i < binStrLen){
        if (posFirstOne - posFirstZero > maxZeroLen){
            maxZeroLen = posFirstOne - posFirstZero;
        }
        posFirstZero = binaryString.indexOf("0", posFirstOne+1)

        posFirstOne =  binaryString.indexOf("1", posFirstZero+1);
        i++;
    }
    return maxZeroLen;
}
//test for 5/3
console.log("");
console.log("testing 1041");
console.log("Expect 5. Got: " + solution(1041))

//test for only trailing zeros
console.log("");
console.log("testing 32");
console.log("Expect 0. Got: " + solution(32))

//test max number
console.log("");
console.log("testing 2,147,483,647");
console.log("Expect 0. Got: " + solution(2,147,483,647))

//test min number
console.log("");
console.log("testing 1");
console.log("Expect 0. Got: " + solution(1));

//test 101010101
console.log("");
console.log("testing 341");
console.log("Expect 1. Got: " + solution(341));

//test 2 0s at first gap
console.log("");
console.log("testing 597");
console.log("Expect 2. Got: " + solution(597));

//test 3 0s at first gap
console.log("");
console.log("testing 1109");
console.log("Expect 3. Got: " + solution(1109));

//test 3/4/3
console.log("");
console.log("testing 8721");
console.log("Expect 4. Got: " + solution(8721));

//test 3/3/4
console.log("");
console.log("testing 8737");
console.log("Expect 4. Got: " + solution(8737));

//test random large
console.log("");
console.log("testing 35788352");
console.log("Expect 4. Got: " + solution(35788352));
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

//test for 5/3
validate("1041 (10000010001) 5 0s then 3 0s", 5, 1041)

//test for only trailing zeros
validate("32 (100000) only trailing 0s", 0, 32)

//test max number
validate("2,147,483,647 (01111111111111111111111111111111) Max Number", 0, 2,147,483,647)

//test min number
validate("1 (01) Min Number", 0, 1)

//test 101010101
validate("341 (101010101) alternating starts with 1", 1, 341)

//test 2 0s at first gap
validate("597 (1001010101) 2 zeros in first gap, then single zeros", 2, 597)

//test 3 0s at first gap
validate("1109 (10001010101) 3 zeros in first gap, then single zeros", 3, 1109)

//test 3/4/3
validate("8721 (10001000010001) 3 zeros in first gap, then 4 zeros, then 3 again", 4, 8721)

//test 3/3/4
validate("8737 (10001000100001) 3 zeros in first gap, then 3 zeros, then 4", 4, 8737)

//test random large
validate("35788352 (10001000100001011001000000) large number with assorted lengths of zeros", 4, 35788352)

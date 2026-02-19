function solution(X, Y, D) {
    // we can calculate the distance between X and Y, and then divide that by D to get the number of jumps needed.
    let distance = Y - X;

    // we can use Math.ceil to round up to the nearest whole number, since we can't have a fraction of a jump.
    let jumpsNeeded = Math.ceil(distance / D);

    return jumpsNeeded;
}

function validate(A, B, C, D, E) {
    let startTime
    let result
    let msRun
    console.log("testing " + A)
    startTime = Date.now()
    result = solution(C, D, E)
    msRun = (Date.now() - startTime).toString()
    console.log("expect " + B.toString() + ". got: " + result)
    console.log("milliseconds : " + msRun)
    console.log(B == result)
    console.log("");
}

//testing 10,85,30
validate("10,85,30", 3, 10,85,30)


//testing 1,9000,7
validate("1,9000,7", 1286, 1,9000,7)

//testing 2,815,27
validate("2,815,27", 31, 2,815,27)

//testing 7000,9567,2
validate("7000,9567,2", 1284, 7000,9567,2)


function solution(X, Y, D) {
    // we can calculate the distance between X and Y, and then divide that by D to get the number of jumps needed.
    let distance = Y - X;

    // we can use Math.ceil to round up to the nearest whole number, since we can't have a fraction of a jump.
    let jumpsNeeded = Math.ceil(distance / D);

    return jumpsNeeded;
}

//testing 10,85,30
console.log("expected 3, got: " + solution(10,85,30));
console.log(solution(10,85,30) == 3);

//testing 1,9000,7
console.log("")
console.log("expected 1286, got: " + solution(1,9000,7));
console.log(solution(1,9000,7) == 1286);

//testing 2,815,27
console.log("")
console.log("expected 31, got: " + solution(2,815,27));
console.log(solution(2,815,27) == 31);

//testing 7000,9567,2
console.log("")
console.log("expected 1284, got: " + solution(7000,9567,2));
console.log(solution(7000,9567,2) == 1284);

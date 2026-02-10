// A binary gap within a positive integer N is any maximal 
// sequence of consecutive zeros that is surrounded by ones 
// at both ends in the binary representation of N.

const decimalNumber = 32;
const binaryString = decimalNumber.toString(2);

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
console.log("longest string of zeros is: " + maxZeroLen)

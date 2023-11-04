import readlineSync from "readline-sync";
function decoding(){
    const inputString = readlineSync.question("Enter the decode word : ");
//     const splitString = inputString.split("");
//     //console.log(splitString);
// const base64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
// const base64Value = splitString.map((ele)=>ele(base64));
// console.log(base64Value);
var decodedString = atob(inputString);
console.log(`base64 decoding of "${inputString}" is "${decodedString}"`);

}
decoding() 


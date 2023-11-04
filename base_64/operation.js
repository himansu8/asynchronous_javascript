//import readlineSync from "readline-sync";
function encoding(inputString){
    //const inputString = readlineSync.question("Enter the word : ");
    const splitString = inputString.split("");
    //console.log(splitString);
    const ascii_code = splitString.map((ele)=>ele.charCodeAt(0));
    //console.log(ascii_code);
    const binary8bit = ascii_code.map((ele)=>ele.toString(2).padStart(8,"0"));
    //console.log(binary8bit);
    const combine = binary8bit.join("").split("")
    //console.log(combine);
    const binary6bit = [];
    const groupSize = 6;
    let padingCount = 0;
    for (let i = 0; i<combine.length; i += groupSize){
        const group = combine.slice(i, i+groupSize).join('')
        binary6bit.push(group);
    }
    //console.log(binary6bit);
    if(binary6bit[binary6bit.length-1].length==4){
        binary6bit[binary6bit.length-1]=binary6bit[binary6bit.length-1].padEnd(6,"0")
        padingCount=2;
    }
    else if(binary6bit[binary6bit.length-1].length==2){
        binary6bit[binary6bit.length-1]=binary6bit[binary6bit.length-1].padEnd(6,"0")
        padingCount=4;
    }
    // console.log(binary6bit);
    // console.log(padingCount);
    const newDecimal = binary6bit.map((ele)=>parseInt(ele,2));
    //console.log(newDecimal);
    const base64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
    const base64Value = newDecimal.map((ele)=>base64[ele]);
    //console.log(base64Value);
    if(padingCount==2){
        base64Value.push("=");
    }
    else if(padingCount==4){
        base64Value.push("==");
    }
    const result = base64Value.join('');
    console.log(`base64 encoding of "${inputString}" is "${result}"`);
}
//encoding()

function decoding(inputString1){
    //const inputString1 = readlineSync.question("Enter the decode word : ");
var decodedString = atob(inputString1);
console.log(`base64 decoding of "${inputString1}" is "${decodedString}"`);

}
// decoding()

export {encoding,decoding}
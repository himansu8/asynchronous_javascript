/* 
synchronous : blocking
Asynchronous : non blocking

*/



// console.log("start");
// function abc(){
//     console.log("himansu");
// }
// console.log("jinu");
// abc();
// console.log("end");  //o/p: start jinu himansu end

//---------------------------------------
console.log("start");
function abc(){
    console.log("himansu");
}
abc();
setTimeout(()=>{
    console.log("timer");
},5000)
console.log("end"); //o/p: start himansu end timer (timer print after 5 sec)
//-----------------------------------------

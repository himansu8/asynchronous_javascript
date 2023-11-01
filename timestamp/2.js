console.log("start");
function abc() {
    console.log("himansu");
}
setTimeout(() => {
    console.log("timer2");
}, 2000)
console.log("hello");
abc();
setTimeout(() => {
    console.log("timer5");
}, 5000)
console.log("end") //o/p: start hello himansu end timer2 timer 5
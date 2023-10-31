import axios from "axios";
// let output = axios.get('https://jsonplaceholder.typicode.com/users')
// console.log(output);
//method 1
// console.time()
// axios.get('https://jsonplaceholder.typicode.com/users')
// // console.log(output)
//     .then((response)=>{
//         console.log(response.data);
//         console.timeEnd()
//     })
//     .catch((error)=>{
//         console.log(error);
//     })

//method 2
async function main(){
    try {
        console.log('start');
        let response = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(response.data);
        console.log('end');
    } catch (error) {
        console.log(error)
    }
}
main();
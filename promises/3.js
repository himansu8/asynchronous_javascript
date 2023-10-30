

function callPromises(age){
    return new Promise ((resolve, reject)=>{
setTimeout(()=>{
    if(age >= 18) resolve ('Allowed')
    else reject ('not allowed')
},8000)

    })
}

// let output = callPromises(20);
// console.log(output);

callPromises(14)
    .then((data)=>{
        console.log('then block resolved')
        console.log(data)
    })
    .catch((err)=>{
        console.log('catch block rejected')
        console.log(err);
    })


/*
consume Promise Method2: async await
    - async and await keyword is must
    - it doesn't have built in error handling, you need
    to use try catch block

*/

// async function getResult(){
//     try {
//         let output = await callPromise(20);
//         console.log(output);
//         let output2 = await callPromise(20);
//         console.log(output2);
//         let output3 = await callPromise(20);
//         console.log(output3);
//     }
//     catch(err){
//         console.log(err);
//         console.log("Something went wrong");
//     }
// }
// getResult(); 
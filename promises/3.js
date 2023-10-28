

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
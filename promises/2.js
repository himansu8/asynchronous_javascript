function callPromises(age){
    let promise = new Promise ((resolve, reject)=>{
        if(age >= 18) resolve ('Allowed')
        else reject ('not allowed')
    })
    return promise;
}

// let output = callPromises(20);
// console.log(output);


callPromises(14)
    .then((data)=>{
        // console.log('then block resolved')
        console.log(data)
    })
    .catch((err)=>{
        // console.log('catch block rejected')
        console.log(err);
    })

//promise is a object which contain two state i.e resolve and reject state
//resole() & reject()

/*
state of promises 1- pending
                  2- resolve    .then
                  3- reject     .catch
      
  consume a promises
  1. then() catch()
  2.async await     
             
*/

import fs from 'node:fs/promises';

fs.readFile('data2.txt')  //return a promises
.then((data)=>{          // promise resolve
    data= String(data);
    console.log(data)
})
.catch((err)=>{          //promises reject
    console.log('something went wrong')
    console.log(err)

})


// let output = fs.readFile('data.txt');
// console.log(output)
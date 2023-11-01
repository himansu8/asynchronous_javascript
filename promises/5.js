import axios from 'axios';
import readlineSync from 'readline-sync';

let num1 = readlineSync.questionInt('Enter the number1: ')
let num2 = readlineSync.questionInt('Enter the number2: ')

 axios.get(`https://appserver-w05c.onrender.com/add/${num1}/${num2}`)
        .then((res1)=>{
            console.log(`sum of num1 and num2 : ${res1.data}`);
            let num3 = readlineSync.questionInt('Enter the number3: ')
            axios.get(`https://appserver-w05c.onrender.com/add/${res1.data}/${num3}`)
            .then((res2)=>{
                console.log(`sum of res1 and num3 : ${res2.data}`);
                let num4 = readlineSync.questionInt('Enter the number4: ')
                axios.get(`https://appserver-w05c.onrender.com/add/${res2.data}/${num4}`)
                .then((res3)=>{
                    console.log(`sum of res2 and num4 : ${res3.data}`); 
                    console.log(`last sum is : ${res3.data}`); 
  
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    })

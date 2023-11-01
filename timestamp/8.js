const arr = [10,20,30,40,50];
for(let i = 0; i<4; i++){
    setTimeout(()=>{            
        console.log(arr[i]);      
    },4000)
}


/*
output:-
10
20
30
40
*/
// settimeout is holding the value of  i bcz let
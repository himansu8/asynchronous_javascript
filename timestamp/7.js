const arr = [10,20,30,40,50];
for(var i = 0; i<4; i++){
    setTimeout(()=>{            
        console.log(arr[i-1]);       //40 40 40 40
    },4000)
}
console.log(i);  //4

/*
output:-
4
40
40
40
40
*/
// settimeout is holding the value of global i bcz var
var i=59;
for(let i=0;i<4;i++){
    setTimeout(()=>{
        console.log(i);   //0 1 2 3
    },4000)
}
console.log(i);    //59

/*
output:-
59
0
1
2
3
*/
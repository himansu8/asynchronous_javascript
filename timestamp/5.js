console.log();
console.log("start");
setTimeout((id)=>{
    const user ={
        name : 'himansu',
        age : '27'
    }
    console.log(`User id : ${id}: User name : ${user.name} : user age : ${user.age}`)
},5000,11)
setTimeout(()=>{
    console.log("i am first")
},1000)
setTimeout(()=>{
    console.log("i am second")
},1500)

/*
output:-

start
i am first
i am second
User id : 11: User name : himansu : user age : 27
*/
console.time('test')
setTimeout(function(){
    console.log("I am first")
},1000)
setTimeout(function(){
    console.log("I am second")
},1500)
setTimeout(function(){
    console.log("I am third")
},3500)
setTimeout(function(){
    console.log("I am getting started with adv JS")
    setTimeout(function(){
        console.log("I am getting started again")
        console.timeEnd('test');
    },5000)
},2000)


/*
output:-
I am first
I am second
I am getting started with adv JS
I am third
I am getting started again
test: 7.008s
*/
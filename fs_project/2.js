import fs from 'node:fs';

function writeToAFile(){
    // let data = "hello world";
    let data = [1,2,3];
fs.writeFile('sample.txt', JSON.stringify(data) ,(err)=>{
    if(err) throw err;
    console.log("Data has ben written to the file successfully");
})
}
writeToAFile();


function readFromFile(){
    fs.readFile('sample.txt',(err,data)=>{
        if(err) throw err
        data = String(data);
        console.log(data);
    })
}
// readFromFile() 
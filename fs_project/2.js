import fs, { read } from 'node:fs';
import readlineSync from 'readline-sync';

function writeToAFile(){
//  let data = readlineSync.question("write some data to the file sample2.tex : ");
    // let data = String(1)   //number to string
    let data = [1,2,3];
fs.writeFile('sample2.txt', JSON.stringify(data) ,(err)=>{
    if(err) throw err;
    console.log("Data has ben written to the file successfully");
})
}
// writeToAFile();


function readFromFile(){
    fs.readFile('sample2.txt',(err,data)=>{
        if(err) throw err
        data = String(data);
        // data =JSON.parse(data);
        console.log(data);
    })
}
readFromFile() 
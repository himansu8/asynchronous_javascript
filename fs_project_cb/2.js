import fs from 'node:fs';
import readlineSync from 'readline-sync';

function writeToAFile(){
//  let data = readlineSync.question("write some data to the file sample2.tex : ");
    // let data = String(1)   //number to string
    let data = [1,2,3,4];
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

//--------------------------------------------------------
/*
//serialization
JSON.stringfy() => string
//deserilazation
JSON.parse() => from string to actual data structure
when a person sent the data they send the data as JSON.stringify and who received the data use JSON.parse for received the data
when you write to a file use serialization and when you read a file use deserialization
*/
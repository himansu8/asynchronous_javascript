import fs from 'node:fs';

function writeToAFile(){
    let data = "hello world";
fs.writeFile('sample.txt',data,(err)=>{
    if(err) throw err;
    console.log("Data has ben written to the file successfully");
})
}
writeToAFile();


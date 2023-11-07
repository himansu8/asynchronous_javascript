import fs from 'node:fs';
/*

[{
    fullName:"elon",
    email: elon@spacex.com,
    age:55
}]

*/

//CRUD: Create, Read, Update and Delete

function addUser(user){
    //read the file, get the input from user, then push into array, then write to the file
   
   
    fs.readFile('data.json',(err, data)=>{
        if(err) throw err
        data = JSON.parse(data);

        //check for duplicate email
        const isEmailFound = data.find(ele => ele.email == user.email );
        if(isEmailFound){
            console.log('User already registered! ');
            return;
        }

        data.push(user);
        fs.writeFile('data.json', JSON.stringify(data), (err)=>{
            if(err) throw err;
            console.log("User inserted into file! ");
        })
    })
}
// addUser();

function displayUser(userEmail){
     //read the file
    fs.readFile('data.json',(err, data)=>{
        if(err) throw err
        data = JSON.parse(data);
  //check weather that email exist
        const isEmailFound = data.find(ele => ele.email == userEmail );
         //if not print "no email found"
        if (!isEmailFound){
            console.log('no email found');
            return
        }
        // if exist print the age and name
        else{
           // console.log(isEmailFound);
            console.log(`FullName : ${isEmailFound.fullName}`);
            console.log(`Email : ${isEmailFound.email}`);
            console.log(`Age : ${isEmailFound.age}`);
            return;
        }
    })
}
  
function updateUser(userEmail, newAge, newName){


    //read the file
  fs.readFile('data.json',(err, data)=>{
    if(err) throw err

    data = JSON.parse(data);

    //check weather that email exist
    const userIndex = data.findIndex(ele => ele.email == userEmail);
 //if the user doesn't exist "no email found"
    if(userIndex == -1){
        console.log("User not found");
        return
    }

    //if exist update the record (update the age of that email)
    data[userIndex].age = newAge
    data[userIndex].fullName = newName


    //rewrite to the file after deletion
    fs.writeFile('data.json', JSON.stringify(data), (err)=>{
        if(err) throw err;
        console.log("User age updated! ");
    })
})

}

function deleteUser(userEmail){

  //read the file
  fs.readFile('data.json',(err, data)=>{
    if(err) throw err

    data = JSON.parse(data);

    //check weather that email exist
    const userIndex = data.findIndex(ele => ele.email == userEmail);

    if(userIndex == -1){
        console.log("User not found");
        return
    }

    //if exist delete the user (removing from the array)
    data.splice(userIndex, 1)

    //rewrite to the file after deletion
    fs.writeFile('data.json', JSON.stringify(data), (err)=>{
        if(err) throw err;
        console.log("User deleted from file! ");
    })
})

}

export {addUser, displayUser, updateUser, deleteUser}
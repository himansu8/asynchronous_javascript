import fs from 'node:fs/promises';
/*

[{
    async await
    tr catch block
}]
*/
//CRUD: Create, Read, Update and Delete

async function addUser(user){
    try {
        let data = await fs.readFile('data.json');
        data = JSON.parse(data);
        //check for duplicate email
        const isEmailFound = data.find(ele => ele.email == user.email );
        if(isEmailFound){
            console.log('User already registered! ');
            return;
        }
        data.push(user);
        await fs.writeFile('data.json', JSON.stringify(data) )
        console.log("User inserted into file! ");
    } catch (error) {
        console.log(error)
    }
}
async function displayUser(userEmail){
    try {
        let data = await fs.readFile('data.json')
        data = JSON.parse(data);
        //check weather that email exist
        const isEmailFound = data.find(ele => ele.email == userEmail );
         //if not print "no email found"
        if (!isEmailFound){
            console.log('no email found');
            return
        }
        else{
            // console.log(isEmailFound);
             console.log(`FullName : ${isEmailFound.fullName}`);
             console.log(`Email : ${isEmailFound.email}`);
             console.log(`Age : ${isEmailFound.age}`);
             return;
         }
    } catch (error) {
        console.log(error)
    }
}
async function updateUser(userEmail,newAge,newName){
    try {
        let data = await fs.readFile('data.json')
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
       await fs.writeFile('data.json',JSON.stringify(data))
       console.log("User age updated! ");
    } catch (error) {
        console.log(error)
    }
}
async function deleteUser(userEmail){
    try {
        let data = await fs.readFile('data.json')
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
    await fs.writeFile('data.json',JSON.stringify(data))
    console.log("User deleted from file! ");
        
    } catch (error) {
        console.log(error)
    }

}

export {addUser, displayUser, updateUser, deleteUser}
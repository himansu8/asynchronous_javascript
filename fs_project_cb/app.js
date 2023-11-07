import readlineSync from 'readline-sync';
import {addUser, displayUser, updateUser, deleteUser} from './operations.js'

const main = () => {
    console.clear();

    console.log("********************************************")
    console.log("\t\tFS-PROJ CLI\t\t");
    console.log("********************************************")

    //Print Menu
    console.log(`
    0. Press 0 to Exit
    1. Press 1 to Add User
    2. Press 2 to Display User
    3. Press 3 to Update User Age
    4. Press 4 to Delete User 
    `)

    let option = readlineSync.questionInt("Enter your options: ");
    let userName, userEmail, userAge;
    switch (option) {
        case 0:
        console.log("Thank you for using our CLI Application, See you Again!");
        return;

        case 1:
        userName = readlineSync.question("Enter your fullname: ");
        userEmail = readlineSync.questionEMail("Enter your email: ");
        userAge = readlineSync.questionInt("Enter your Age: ");

        let user = {
            fullName: userName,
            email: userEmail,
            age: userAge
        }
        addUser(user);
        return;

        case 2:
            userEmail = readlineSync.questionEMail("Enter your email: ");
            //take email input from user
            displayUser(userEmail);
        return

        case 3:
            //take email input and newAge from user
            userEmail = readlineSync.questionEMail("Enter your email: ");
            userAge = readlineSync.questionInt("Enter your Age: ");
            userName = readlineSync.question("Enter your fullname: ");
           updateUser(userEmail, userAge, userName)
        return

        case 4:
            userEmail = readlineSync.questionEMail("Enter your email: ");
            deleteUser(userEmail);
            //take email input from user
        return

        default:
            console.log("Invalid Option")
            break;
    }

    let willContinue = readlineSync.question("Do you want to continue? (Y/N): ");

    // Handling all this conditions y, Y, yes, YES, Yes, yEs, yES 
    willContinue = willContinue.toLowerCase()
    if(willContinue == 'yes' || willContinue == 'y'){
        main();
    }
    else {
        console.log("Thank you for using our CLI Application, See you Again!");
        return;
    }
}
main();
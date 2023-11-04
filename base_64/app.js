import {encoding,decoding} from './operation.js'
import readlineSync from "readline-sync";
const main = () => {
    console.clear();

    console.log("********************************************")
    console.log("\t\tBASE64-PROJ CLI\t\t");
    console.log("********************************************")

    //Print Menu
    console.log(`
    0. Press 0 to Exit
    1. Press 1 to encoding
    2. Press 2 to decoding
    `)

    let option = readlineSync.questionInt("Enter your options: ");

    switch (option) {
        case 0:
        console.log("Thank you for using our CLI Application, See you Again!");
        return;

        case 1:
        const inputString = readlineSync.question("Enter the encode word : ");
        encoding(inputString);
        return;
        case 2:
        const inputString1 = readlineSync.question("Enter the decode word : ");
        decoding(inputString1);
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
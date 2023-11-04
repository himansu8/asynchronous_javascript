import readlineSync from 'readline-sync';
import {addWeather, displayTemp} from './weather.js'

const main = () => {
    console.clear();

    console.log("********************************************")
    console.log("\t\tFS-PROJ CLI\t\t");
    console.log("********************************************")

    //Print Menu
    console.log(`
    0. Press 0 to Exit
    1. Press 1 to Add city weather report
    2. Press 2 to Display Temperature
    3. Press 3 to Display Humidity
    4. Press 4 to Display Windspeed 
    `)

    let option = readlineSync.questionInt("Enter your options: ");
    let cityName;
    switch (option) {
        case 0:
        console.log("Thank you for using our CLI Application, See you Again!");
        return;

        case 1:
        cityName = readlineSync.question("Enter the city name: ");
        addWeather(cityName);
        return;

        case 2:
            cityName = readlineSync.question("Enter the city name: ");
            displayTemp(cityName);
        return

        case 3:
            
           displayHumidity()
        return

        case 4:
            
           windSpeed()
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
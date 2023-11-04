import axios from 'axios';
// import readlineSync from 'readline-sync';
import fs from 'node:fs/promises'
function hitAPI(cityName) {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8221abdb1403afdd222332ec8686202d`) //promise
}


async function addWeather(cityName){
    try {
        let data = await fs.readFile('data1.json');
        data = JSON.parse(data);
   
        const res = await hitAPI(cityName);
        data.push(res.data)
        // let data = res.data//.main.temp;
        //console.log(`The weather report of ${cityName} ${data}`);
        await fs.writeFile('data1.json',JSON.stringify(data))
            console.log("data was saved successfully");

       

    } catch (error) {
        
        console.log(error);
    }
}
// main();
async function displayTemp(cityName){
    try {
        const res = await hitAPI(cityName);
        let data = res.data.main.temp;
        console.log(`The temp at ${cityName} ${data} K`);
    } catch (error) {
       console.log(error);
    }
}






export {addWeather, displayTemp}
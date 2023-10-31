import axios from "axios";
import fs from "node:fs/promises"



    async function main(){
            try {
               let response = await axios.get('https://jsonplaceholder.typicode.com/todos')
               let data = (response.data);
               let data2 = data.filter(ele => ele.completed == true);
               let data3 = data.filter(ele => ele.completed == false);

                await fs.writeFile('success.json', JSON.stringify(data2))
                    console.log("data inserted into file! ");
                await fs.writeFile('error.json', JSON.stringify(data3))
                    console.log("data inserted into file! ");
            } catch (error) {
               console.log(error) 
            }
        
        }
        main()
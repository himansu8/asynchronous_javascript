import axios from "axios";
import fs from "node:fs/promises"



    async function main(){
            try {
               let response = await axios.get('https://jsonplaceholder.typicode.com/users')
               let data = (response.data);
                // data.push(data);
        
                await fs.writeFile('data.json', JSON.stringify(data))
                    console.log("data inserted into file! ");
            
            } catch (error) {
               console.log(error) 
            }
        
        }
        main()
import axios from "axios";
import fs from "node:fs"



    async function main(){
            try {
               let response = await axios.get('https://jsonplaceholder.typicode.com/users')
               let data = (response.data);
                // data.push(data);
        
                fs.writeFile('data.json', JSON.stringify(data),(err)=>{
                    if(err)throw err;
                    console.log("data inserted into file! ");
                });
        
        
            } catch (error) {
               console.log(error) 
            }
        
        }
        main()
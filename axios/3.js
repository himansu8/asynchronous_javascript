import axios from "axios";
import fs from "node:fs"



    async function main(){
            try {
               let response = await axios.get('https://jsonplaceholder.typicode.com/todos')
               let data = (response.data);
               let data2 = data.filter(ele => ele.completed == true);
               let data3 = data.filter(ele => ele.completed == false);

                fs.writeFile('data2.json', JSON.stringify(data2),(err)=>{
                    if(err)throw err;
                    console.log("data inserted into file! ");
                });
                fs.writeFile('data3.json', JSON.stringify(data3),(err)=>{
                    if(err)throw err;
                    console.log("data inserted into file! ");
                });
        
            } catch (error) {
               console.log(error) 
            }
        
        }
        main()
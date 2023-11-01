import axios from 'axios';
const users = ['abdul535', 'himansu8', 'rajaramsahoo']

function hitAPI(username) {
    return axios.get(`https://api.github.com/users/${username}`);

}
// hitAPI('himansu8')
//     .then(res=>console.log(res.data))
//     .catch(err=>console.log(err))
const userData = [];
users.forEach((users) => {
    hitAPI(users)
        .then((res)=>{
        const info = {};
        info.name = res.data.name;
        info.followers = res.data.followers;
        info.following = res.data.following;
        userData.push(info)

    })
    .catch((err)=>console.log(err))
})
setTimeout
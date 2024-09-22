import axios from 'axios'; 

 export const fetchUserData = async (username, location, minRepos) => {  

    try{ 
       // ["https://api.github.com"] 
       const query = `q=${username ? username : ''}+ ${location ? location: ''} + repos:>${minRepos ? minRepos: 0}` 
       const response = await axios.get(`https://api.github.com/search/users?${query}`)
       // const response = await axios.get(`https/api.github.com/users/${username}`) 
        console.log(response.data)
        return response.data.items
        
    }catch(error){
        throw error;
    }

}
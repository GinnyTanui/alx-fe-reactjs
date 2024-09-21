import axios from 'axios'; 

 export const fetchUserData = async (username) => {  

    try{ 
        ["https://api.github.com"]
        const response = await axios.get(`https//api.github.com/users/${username}`) 
        console.log(response.data)
        return response.data 
        
    }catch(error){
        throw error;
    }

}
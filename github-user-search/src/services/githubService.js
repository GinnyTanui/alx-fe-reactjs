import axios from 'axios'; 

 export const fetchUserData = async (username) => {  

    try{ 
        const username = e.target.elements.username.value; 
       console.log(username)
        const response = await axios.get(`https//api.github.com/users/${username}`) 
        console.log(response.data)
        return response.data 
        
    }catch(error){
        throw error;
    }

}
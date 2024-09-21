import React from "react"; 
import { useState } from "react";  
import { fetchUserData } from "../services/githubService";

const SearchUsers = () => {  
    // const [username, setUsername] = useState(""); 
    const [userData, setUserData] = useState(null); 
    const [loading, setloading] = useState(false); 
    const [error, setError] = useState(""); 
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setloading(true); 
        setError(""); 
        setUserData(null)   
        
        const username = e.target.elements.username.value;

        try{
            const data = await fetchUserData(username); 
            console.log(data)
            setUserData(data)
            
        }catch(err){
            setError("Looks like we cant find the user")
        }finally{
            setloading(false)
        }
    } 
    // const handleChange = (e) => { 
    //     setUsername(e.target.value)
        
   // } 
    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <label>Enter a username</label> 
                <input type="text" name="username" id="username"  placeholder="Enter github username" /> 
                <button type="submit">Submit</button> 
                {loading && <p>Loading...</p>} 
                {error && <p>{error}</p>}  
                {userData ? (
                    <div>
                        <h2>Github User Information</h2>  
                        <img src={userData.avatar_url} /> 
                        <p>Username:{userData.id}</p> 
                        <p>Profile: <a href={userData.html_url} target="blank" rel="noopener noreferrer">View profile</a></p>
                    </div>
                )
                : <p>Looks like we cannot find the user</p> }

            </form>
        </div>
    )
    
            
            
       
} 
export default SearchUsers;
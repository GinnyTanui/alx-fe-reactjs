import React from "react"; 
import { useState, useEffect } from "react"; 
const HomePage = () => { 
    const [data, setData] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null) 
    //useEffect to fetch the data on mount 
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch('/data.json'); 
                if(!response.ok){
                    throw new Error('Error loading')
                } 
                const jsonData = await response.json(); 
                setData(jsonData) //set the data in state
            }catch(error){
                setError(error.message)
            }finally {
                setLoading(false)
            }
        }; 
        fetchData();
    }, []); 
    if(loading) {
        return <div>Loading...</div>
    }
    if(error){
        return <div>Error: {error}</div>
    } 
    return(
        <div>
            <h1>Recipe Sharing</h1> 
            <ul>{data.map((item) => (
                <div key={item.id}>
                    <h2>{item.title}</h2> 
                    <p>{item.summary}</p> 
                    <img src={item.imageUrl} alt={item.title}/>
                </div>
            ))}</ul>
        </div>
    )

} 
export default HomePage;
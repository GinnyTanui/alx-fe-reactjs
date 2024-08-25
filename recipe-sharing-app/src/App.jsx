import React from "react"; 
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'  
import RecipeDetails from "./components/RecipeDetails"; 
import AddRecipeForm from "./components/AddRecipeForm"; 
import RecipeList from "./components/RecipeList"; 
import SearchBar from "./components/SearchBar";

function App() {
 

  return (
    <>  
    <Router>  
    <RecipeList/> 
    <AddRecipeForm/> 
    <SearchBar/>
      <Routes> 
         <Route path="/recipes/:id" element={<RecipeDetails/>}/>
      </Routes>  
      
   
    
    </Router>
    </>
  )
}

export default App

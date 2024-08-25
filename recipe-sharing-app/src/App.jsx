import React from "react"; 
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'  
import RecipeDetails from "./components/RecipeDetails"; 
import AddRecipeForm from "./components/AddRecipeForm"; 
import RecipeList from "./components/RecipeList";

function App() {
 

  return (
    <>  
    <Router> 
      <Routes> 
         <Route path="/recipes/:id" element={<RecipeDetails/>}/>
      </Routes>  
      <RecipeList/> 
      <AddRecipeForm/>
   
    
    </Router>
    </>
  )
}

export default App

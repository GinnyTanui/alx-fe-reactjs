import React from "react"; 
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'  
import RecipeDetails from "./components/RecipeDetails"; 
import AddRecipeForm from "./components/AddRecipeForm"; 
import RecipeList from "./components/RecipeList"; 
import SearchBar from "./components/SearchBar"; 
import FavoriteList from "./components/FavoriteList"; 
import RecommendationList from "./components/RecommendationList";

function App() {
 

  return (
    <>  
    <Router>  
    <RecipeList/> 
    <AddRecipeForm/> 
    <SearchBar/>
      <Routes> 
         <Route path="/recipes/:id" element={<RecipeDetails/>}/> 
         <Route path ="/favorites" element={<FavoriteList/>}/> 
         <Route path="/recommendations" element={<RecommendationList/>}/>

      </Routes>  
      
   
    
    </Router>
    </>
  )
}

export default App

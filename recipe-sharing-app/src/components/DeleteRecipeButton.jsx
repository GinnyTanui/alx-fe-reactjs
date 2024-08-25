import React from "react"; 
import useRecipeStore from "./recipeStore"; 
import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = ({id, onDelete}) => {
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe)  
    const navigate = useNavigate();
    const handleDelete = () => {
        deleteRecipe(id); 
        if(onDelete) onDelete();
    }  
    navigate(`/recipes/${id}`)
    return(
        <button onClick={handleDelete}>
         Delete Recipe
        </button>
    )
} 
export default DeleteRecipeButton;
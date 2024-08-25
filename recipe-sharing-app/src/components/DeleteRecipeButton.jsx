import React from "react"; 
import useRecipeStore from "./recipeStore"; 

const DeleteRecipeButton = ({id, onDelete}) => {
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe) 
    const handleDelete = () => {
        deleteRecipe(id); 
        if(onDelete) onDelete();
    } 
    return(
        <button onClick={handleDelete}>
         Delete Recipe
        </button>
    )
} 
export default DeleteRecipeButton;
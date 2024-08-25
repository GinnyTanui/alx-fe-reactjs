import useRecipeStore from "./recipeStore";  
import React from "react"; 
import DeleteRecipeButton from "./DeleteRecipeButton";
const RecipeDetails = ({id}) => {
    const recipe = useRecipeStore((state) => state.recipes.find((recipe) => recipe.id === id)); 
    if(!recipe){
        return (
            <div>Recipe not found</div>
        )
    } 

    return(
        <div>
            <h1>{recipe.title}</h1> 
            <p>{recipe.description}</p> 
            <DeleteRecipeButton id={id} onDelete={onDelete}/>
        </div>
    )
} 
export default RecipeDetails;

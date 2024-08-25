import React from "react"; 
import useRecipeStore from "./recipeStore"; 
const FavoriteList = () => {
    const favorites = useRecipeStore((state)=> state.favorites); 
    const removeFavorites = useRecipeStore((state) => state.removeFavorites); 

    return(
        <div>
            <h2>Favorite Recipes</h2> 
            {favorites.length === 0 ? (
                <p>No favorite recipes</p>
            ) : (
                <ul>
                    {favorites.map((recipe) => (
                        <li key={recipe.id}>
                            <h3>{recipe.title}</h3>  
                            <p>{recipe.description}</p> 
                            <button onClick={()=> removeFavorites(recipe.id)}>Remove from favorites</button>

                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
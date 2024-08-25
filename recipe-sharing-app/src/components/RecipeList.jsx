import useRecipeStore from "./recipeStore"; 

const RecipeList = () => { 
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes); 

  return(
    <div>
        {filteredRecipes.lenght === 0 ? (<p>No recipes found</p>): (
            <ul>{filteredRecipes.map((recipe) => (
                <li key={recipe.id}>
                    <h2>{recipe.title}</h2> 
                    <p>{recipe.description}</p>
                </li> 
                
            ))}</ul>
        ) }
    </div>
  )

} 
export default RecipeList
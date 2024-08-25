import React, {useState} from 'react' 
import useRecipeStore from './recipeStore' 
const EditRecipeForm = ({id, onSave}) => {
    const recipe = useRecipeStore((state) => state.recipes.find((recipe) => recipe.id === id)); 
    const updateRecipe = useRecipeStore((state) => state.updateRecipe); 
    const [title, setTitle] = useState(recipe ? recipe.title: ''); 
    const [description, setDescription] = useState( recipe ? recipe.description : ''); 
    const handleSubmit = (event) => {
      event.preventDefault(); 
      updateRecipe(id, {title, description}); 
      if(onSave) onSave();
    } 
    return(
        <form onSubmit={handleSubmit}> 
        <input type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder='Title'></input> 
        <textarea value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder='Description'>    
        </textarea> 
        <button type='submit'>UpdateRecipe</button>

        </form>
    )
} 
export default EditRecipeForm;
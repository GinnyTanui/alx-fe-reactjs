import React, {useEffect} from 'react' 
import useRecipeStore from './recipeStore' 
const RecommendationList = () => {
    const recommmendations = useRecipeStore((state) => state.recommmendations); 
    const generateRecommendations = useRecipeStore((state) => state.generateRecommendations); 
    useEffect(()=> {
        generateRecommendations(); 
    }, [generateRecommendations]); 
    return(
        <div>
            <h2>Recommend recipes</h2> 
            <ul>
                {recommmendations.map((recipe) => (
                    <li key={recipe.id}>
                        <h3>{recipe.title}</h3> 
                        <p>{recipe.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
} 
export default RecommendationList
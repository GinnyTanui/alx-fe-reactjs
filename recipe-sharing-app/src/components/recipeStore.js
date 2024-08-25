import {create} from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [], 
  setRecipes: (recipes) => set({ recipes }), 
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }), 
  filteredRecipes: [], 
  favorites: [], 
  recommendations: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })), 
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
  )})), 
  addFavorite: (recipe) => set((state) => ({
    favorites: [...state.favorites, recipe]
  })), 
  removeFavorite: (id) => set((state) => ({
    favorites: state.favorites.filter((recipe) => recipe.id !== id)
  })), 
  generateRecommendations: () => set((state) => {
    // simple recommend the top 3 most popular recipes not in favorites 
    const recommended = state.recipes.filter((recipe) => state.favorites.some((fav) => fav.id=== recipe.id)).slice(0, 3); 
    return{recommendations: recommended}
  }), 
  deleteRecipe: (id) => set(state => ({recipes: state.recipes.filter((recipe) =>recipe.id !== id)})), 
  updateRecipe: (id, updatedData) => set((state) => ({
    recipes: state.recipes.map(recipe => recipe.id === id ? {...recipe, ...updatedData} : recipe)
  }))

})); 
export default useRecipeStore;
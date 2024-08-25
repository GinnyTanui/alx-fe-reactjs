import {create} from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [], 
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }), 
  filteredRecipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })), 
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
  )})),
  setRecipes: (recipes) => set({ recipes }), 
  deleteRecipe: (id) => set(state => ({recipes: state.recipes.filter((recipe) =>recipe.id !== id)})), 
  updateRecipe: (id, updatedData) => set((state) => ({
    recipes: state.recipes.map(recipe => recipe.id === id ? {...recipe, ...updatedData} : recipe)
  }))

})); 
export default useRecipeStore;
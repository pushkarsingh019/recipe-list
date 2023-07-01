import { createContext, useEffect, useState } from "react";
import { recipes } from "../data";
import { v4 as uuid } from "uuid";

export const storeContext = createContext();

export const StoreContext = ({ children }) => {
  const [recipesList, setRecipes] = useState(JSON.parse(localStorage.getItem("recipes")) !== null ? JSON.parse(localStorage.getItem("recipes")) : recipes);

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipesList));
  }, [recipesList]);

  const store = {
    recipesList: recipesList,
    getRecipe: (id) => recipesList.find((recipe) => recipe.id == id),
    addNewRecipe: (recipeData) => {
      const newRecipe = {
        id: uuid(),
        name: recipeData.name,
        cuisine: recipeData.cuisine,
        ingredients: recipeData.ingredients.replace(/\s/g, "").split(","),
        instructions: recipeData.instructions.replace(/\s/g, "").split(","),
        image: URL.createObjectURL(recipeData.image),
      };
      setRecipes([...recipesList, newRecipe]);
    },
  };

  return (
    <storeContext.Provider value={store}>
      {children}
    </storeContext.Provider>
  );
};

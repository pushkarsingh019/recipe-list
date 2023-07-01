import React, { useContext, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import NewRecipeForm from "../components/NewRecipeForm";
import { storeContext } from "../utils/context";

const HomeScreen = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { recipesList } = useContext(storeContext);
    const handleToggleState = (toggleState) => setIsOpen(toggleState);
    return (
        <section className="px-8 py-4 mt-3">
            <div className="flex justify-between items-center">
                <h1 className="text-4xl font-serif font-medium text-center md:text-left">
                    Recipes
                </h1>
                <button
                    onClick={() => setIsOpen(true)}
                    className=" outline-none px-3 py-1.5 bg-zinc-900 rounded-md text-white"
                >
                    New Recipe
                </button>
            </div>
            <br />
            <div className="flex flex-col md:flex-row md:flex-wrap md:justify-start md:gap-x-6 md:items-start justify-center items-center gap-y-6">
                {recipesList.map((recipe) => {
                    return <RecipeCard key={recipe.id} recipe={recipe} />;
                })}
            </div>
            <NewRecipeForm isOpen={isOpen} toggleIsOpen={handleToggleState} />
        </section>
    );
};

export default HomeScreen;

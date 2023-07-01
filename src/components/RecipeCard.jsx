import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
    return (
        <div className="w-64 h-18 shadow-md border px-4 py-2.5 flex flex-col justify-center align-middle gap-y-5 rounded-md">
            <img
                className="h-64 object-cover rounded-sm"
                src={recipe.image}
                alt={recipe.name}
            />
            <h3 className="text-xl font-medium">{recipe.name}</h3>
            <div>
                <div className="flex justify-between pr-1.5">
                    <p className="font-medium">Cuisine Type:</p>
                    <p className="text-base">{recipe.cuisine}</p>
                </div>
                <div className="flex justify-between pr-1.5 items-center">
                    <p className="font-medium">Ingredients</p>
                    <Link
                        className="text-md hover:text-sky-600 hover:underline"
                        to={`/recipe/${recipe.id}`}
                    >
                        see recipe
                    </Link>
                </div>
                <div className="flex justify-between pr-1.5 items-center">
                    <p className="font-medium">Instructions</p>
                    <Link
                        className="text-md hover:text-sky-600 hover:underline"
                        to={`/recipe/${recipe.id}`}
                    >
                        see recipe
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;

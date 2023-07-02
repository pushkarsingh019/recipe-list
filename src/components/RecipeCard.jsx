import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { storeContext } from "../utils/context";

const RecipeCard = ({ recipe }) => {
    const { deleteRecipe } = useContext(storeContext);
    return (
        <div className=" relative w-64 h-18 shadow-md border px-4 py-2.5 flex flex-col justify-center align-middle gap-y-5 rounded-md">
            <div className="absolute top-[4px] right-0 bg-white px-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30px"
                    viewBox="0 0 24 24"
                    width="30px"
                    fill="#000000"
                    onClick={() => deleteRecipe(recipe.id)}
                >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" />
                </svg>
            </div>
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

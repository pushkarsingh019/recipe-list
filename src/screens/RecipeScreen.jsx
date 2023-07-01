import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { recipes } from "../data";
import { storeContext } from "../utils/context";

const RecipeScreen = () => {
    const { id } = useParams();
    const { getRecipe } = useContext(storeContext);
    const recipeToShow = getRecipe(id);
    console.log(recipeToShow);
    return (
        <section className="my-10 mx-4 flex items-center justify-center h-[80vh] bg-gray-50">
            <div className="flex w-screen flex-col items-center mt-6">
                <div className="shadow-md items-center flex gap-x-16 w-full md:w-[90vw] lg:w-[60vw] px-4 py-2 bg-white rounded-md">
                    <img
                        src={recipeToShow.image}
                        alt={recipeToShow.name}
                        className="w-60 h-auto object-contain rounded-xl"
                    />
                    <div className="flex flex-col gap-y-3">
                        <h3 className="text-xl font-semibold">
                            {recipeToShow.name}
                        </h3>
                        <p>
                            <span className="font-semibold">Ingredients :</span>{" "}
                            {recipeToShow.ingredients.map((ingredient) => {
                                return <span>{ingredient}, </span>;
                            })}
                        </p>
                        <div>
                            <p className="font-semibold mb-1.5">Instructions</p>
                            <ul className="pl-2.5">
                                {recipeToShow.instructions.map(
                                    (instruction) => {
                                        return (
                                            <li className="list-disc mb-1 text-md">
                                                {instruction}
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecipeScreen;

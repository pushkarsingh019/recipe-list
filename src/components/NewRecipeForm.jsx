import React, { useContext, useEffect, useState } from "react";
import { storeContext } from "../utils/context";

const NewRecipeForm = ({ isOpen, toggleIsOpen }) => {
    const closeModal = () => toggleIsOpen(false);
    const [formData, setFormData] = useState({});
    const { addNewRecipe } = useContext(storeContext);

    const onFormSubmit = (event) => {
        event.preventDefault();
        closeModal();
        addNewRecipe(formData);
        setFormData({});
    };
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                closeModal();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
        // eslint-disable-next-line
    }, []);

    return isOpen ? (
        <div className="modal flex justify-center items-center md:fixed md:inset-0">
            <div
                onClick={closeModal}
                className="fixed inset-0 bg-zinc-300 opacity-75 z-50"
            ></div>
            <div className="fixed md:w-[450px] bottom-0 left-0 right-0 h-max bg-white rounded-t-xl rounded-r-xl shadow-2xl z-[9999] px-6 py-8 md:static md:rounded-lg md:px-6">
                <h2 className="text-2xl font-medium mb-3">Add new recipe</h2>
                <form onSubmit={onFormSubmit}>
                    <label className="text-sm">Recipe Name</label>
                    <br />
                    <input
                        type="text"
                        placeholder="Chicken Curry"
                        className="py-1 px-2 border-2 border-gray-300 w-full rounded-sm outline-none mt-0.5"
                        value={formData.name ? formData.name : ""}
                        onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                        }
                    />
                    <br />
                    <br />
                    <label className="text-sm">Cuisine</label>
                    <br />
                    <input
                        type="text"
                        placeholder="Italian"
                        className="py-1 px-2 border-2 border-gray-300 w-full rounded-sm outline-none mt-0.5"
                        value={formData.cuisine ? formData.cuisine : ""}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                cuisine: e.target.value,
                            })
                        }
                    />
                    <br />
                    <br />
                    <label className="text-sm">Ingredients</label>
                    <br />
                    <textarea
                        rows={2}
                        type="text"
                        placeholder="chicken breast, broccoli, carrot, bell pepper"
                        className="py-1 px-2 border-2 border-gray-300 w-full rounded-sm outline-none mt-0.5"
                        value={formData.ingredients ? formData.ingredients : ""}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                ingredients: e.target.value,
                            })
                        }
                    />
                    <br />
                    <br />
                    <label className="text-sm">Intructions</label>
                    <br />
                    <textarea
                        rows={4}
                        type="text"
                        placeholder="Boil water and cook spaghetti according to package instructions, 
                        Heat olive oil in a large pan over medium heat, 
                        Add onion and garlic to the pan and cook until softened,... "
                        className="py-1 px-2 border-2 border-gray-300 w-full rounded-sm outline-none mt-0.5"
                        value={
                            formData.instructions ? formData.instructions : ""
                        }
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                instructions: e.target.value,
                            })
                        }
                    />
                    <br />
                    <br />
                    <label className="text-sm">Recipe Image</label>
                    <br />
                    <input
                        type="file"
                        placeholder="Recipe Image"
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                image: e.target.files[0],
                            })
                        }
                    />
                    <br />
                    <br />
                    <div className="flex justify-between items-center">
                        <div></div>
                        <div>
                            <button
                                onClick={closeModal}
                                className="text-red-400 font-semibold mr-3"
                            >
                                cancel
                            </button>
                            <button
                                type="submit"
                                className="outline-none px-3 py-1.5 bg-zinc-900 rounded-md text-white"
                            >
                                create new recipe
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    ) : (
        ""
    );
};

export default NewRecipeForm;

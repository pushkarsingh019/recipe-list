import { v4 as uuid } from "uuid";

export const recipes = [
    {
      id : uuid(),
      name: "Spaghetti Bolognese",
      cuisine : "Italian",
      image : "https://images.unsplash.com/photo-1600803907087-f56d462fd26b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=654&q=80",
      ingredients: ["spaghetti", "ground beef", "onion", "garlic", "tomato sauce", "olive oil", "salt", "pepper"],
      instructions: ["Boil water and cook spaghetti according to package instructions.", "Heat olive oil in a large pan over medium heat.", "Add onion and garlic to the pan and cook until softened.", "Add ground beef to the pan and cook until browned.", "Pour in tomato sauce, season with salt and pepper, and simmer for 20 minutes.", "Serve the Bolognese sauce over cooked spaghetti."],
      prepTime: 15,
      cookTime: 35,
      servings: 4
    },
    {
      id : uuid(),
      name: "Chicken Stir-Fry",
      cuisine : "European",
      image : "https://images.unsplash.com/photo-1619683548293-c74defe8d5d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
      ingredients: ["chicken breast", "broccoli", "carrot", "bell pepper", "soy sauce", "sesame oil", "garlic", "ginger", "cornstarch", "vegetable oil"],
      instructions: ["Cut chicken breast into thin strips.", "In a small bowl, mix soy sauce, sesame oil, minced garlic, grated ginger, and cornstarch.", "Heat vegetable oil in a wok or large pan over high heat.", "Add chicken to the pan and cook until no longer pink.", "Add broccoli, carrot, and bell pepper to the pan and stir-fry for a few minutes.", "Pour the sauce mixture into the pan and stir-fry until the sauce thickens.", "Serve the chicken stir-fry over steamed rice."],
      prepTime: 20,
      cookTime: 15,
      servings: 3
    },
    {
      id : uuid(),
      name: "Caprese Salad",
      cuisine : "Vegan",
      image : "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      ingredients: ["tomatoes", "fresh mozzarella cheese", "fresh basil leaves", "balsamic vinegar", "extra-virgin olive oil", "salt", "black pepper"],
      instructions: ["Slice tomatoes and fresh mozzarella cheese into thick slices.", "Arrange the tomato and mozzarella slices on a plate, alternating them.", "Tear fresh basil leaves and sprinkle them over the tomato and mozzarella slices.", "Drizzle balsamic vinegar and extra-virgin olive oil over the salad.", "Season with salt and black pepper to taste.", "Serve the Caprese salad immediately."],
      prepTime: 10,
      cookTime: 0,
      servings: 2
    },
    {
      id : uuid(),
      name: "Chocolate Chip Cookies",
      cuisine : "American",
      image : "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80",
      ingredients: ["all-purpose flour", "baking soda", "salt", "unsalted butter", "granulated sugar", "brown sugar", "vanilla extract", "eggs", "chocolate chips"],
      instructions: ["Preheat oven to 350°F (175°C).", "In a medium bowl, whisk together flour, baking soda, and salt.", "In a large bowl, cream together butter, granulated sugar, and brown sugar.", "Beat in vanilla extract and eggs, one at a time.", "Gradually add the dry ingredients to the wet ingredients, mixing until just combined.", "Stir in chocolate chips.", "Drop rounded tablespoons of dough onto baking sheets.", "Bake for 10-12 minutes or until golden brown.", "Allow cookies to cool on baking sheets for a few minutes before transferring to wire racks to cool completely."],
      prepTime: 15,
      cookTime: 12,
      servings: 24
    },
    {
      id : uuid(),
      name: "Vegetable Curry",
      cuisine : "Indian",
      image : "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
      ingredients: ["onion", "garlic", "ginger", "carrot", "potato", "cauliflower", "green beans", "coconut milk", "curry powder", "turmeric", "cumin", "coriander", "vegetable oil", "salt", "pepper"],
      instructions: ["Heat vegetable oil in a large pan over medium heat.", "Add onion, garlic, and ginger to the pan and sauté until fragrant.", "Add curry powder, turmeric, cumin, and coriander to the pan and cook for a minute.", "Add chopped vegetables (carrot, potato, cauliflower, green beans) to the pan and stir well.", "Pour in coconut milk and bring to a simmer.", "Cover the pan and cook for 15-20 minutes or until the vegetables are tender.", "Season with salt and pepper to taste.", "Serve the vegetable curry over steamed rice or with naan bread."],
      prepTime: 20,
      cookTime: 25,
      servings: 4
    }
  ];
  
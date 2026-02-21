import { createServer, Model } from "miragejs"
import { RecipeImages } from "./assets/images/Img";

createServer({
    models: {
        recipes: Model,
    },

    seeds(server) {
        server.create("recipe", {
            id: "1",
            name: "Mediterranean Quinoa Salad",
            shortDescription: "A refreshing, nutrient-dense bowl of protein-packed quinoa and Mediterranean vegetables.",
            prepareTime: "10 minutes",
            cookTime: "15 minutes",
            dietaryTag: "Dairy",
            servings: 4,
            image: RecipeImages.recipe1,
            ingredients: [
                "1 cup quinoa (rinsed)", "2 cups water or vegetable broth", 
                "1 cucumber (diced)", "1 cup cherry tomatoes (halved)", "½ red onion (finely diced)", 
                "½ cup Kalamata olives (pitted and sliced)", "½ cup crumbled Feta cheese", 
                "¼ cup fresh parsley (chopped)", "2 tbsp fresh mint (chopped)", 
                "Dressing: 3 tbsp olive oil, 2 tbsp lemon juice, 1 clove garlic (minced), salt and pepper"
            ],
            instructions: [
                "Bring quinoa and water to a boil. Reduce heat and simmer for 15 minutes.",
                "Fluff quinoa and let cool.",
                "Combine quinoa with vegetables, olives, and herbs in a large bowl.",
                "Whisk dressing ingredients and pour over salad.",
                "Top with Feta and serve."
            ]
        });

        server.create("recipe", {
            id: "2",
            name: "Shakshuka",
            shortDescription: "Poached eggs in a spiced tomato sauce, perfect for a healthy and hearty brunch.",
            prepareTime: "10 minutes",
            cookTime: "15 minutes",
            dietaryTag: "Eggs",
            servings: 2,
            image: RecipeImages.recipe2,
            ingredients: [
                "4–6 large eggs", "1 can (28 oz) crushed tomatoes", "1 onion (diced)", "1 red bell pepper", 
                "2 cloves garlic (minced)", "1 tsp cumin", "1 tsp paprika", "½ tsp chili powder", 
                "2 tbsp extra virgin olive oil", "Fresh parsley and Feta cheese"
            ],
            instructions: [
                "Sauté onion and bell pepper in olive oil until soft.",
                "Stir in garlic and spices; cook until fragrant.",
                "Pour in tomatoes and simmer for 10–15 minutes until thickened.",
                "Create wells in the sauce and crack eggs into them.",
                "Cover and cook for 5–8 minutes until whites are set.",
                "Garnish with herbs and Feta."
            ]
        });

        server.create("recipe", {
            id: "3",
            name: "Vietnamese Spring Rolls",
            shortDescription: "Light rice paper rolls filled with fresh herbs and shrimp for a low-calorie crunch.",
            prepareTime: "15 minutes",
            cookTime: "0 minutes",
            dietaryTag: "Peanuts",
            servings: 2,
            image: RecipeImages.recipe3,
            ingredients: [
                "8–10 rice paper wrappers", "1 lb cooked shrimp (halved)", "1 cup rice vermicelli (cooked)", 
                "1 cup shredded carrots", "1 cucumber (julienned)", "Fresh mint, cilantro, and Thai basil", 
                "Peanut Sauce: 3 tbsp peanut butter, 1 tbsp hoisin, 1 tsp soy sauce, 1 tsp lime juice"
            ],
            instructions: [
                "Soften rice paper in warm water for 1-2 seconds.",
                "Lay flat and layer shrimp, noodles, vegetables, and herbs in the center.",
                "Fold in sides and roll tightly.",
                "Whisk peanut sauce ingredients and serve as a dip."
            ]
        });

        server.create("recipe", {
            id: "4",
            name: "Ratatouille",
            shortDescription: "A beautiful French vegetable stew that celebrates the natural flavors of summer produce.",
            prepareTime: "15 minutes",
            cookTime: "20 minutes",
            dietaryTag: "Allergen-Free",
            servings: 4,
            image: RecipeImages.recipe4,
            ingredients: [
                "1 eggplant (diced)", "2 zucchini (sliced)", "1 yellow squash (sliced)", 
                "1 red bell pepper", "3 tomatoes (chopped)", "1 onion (diced)", 
                "3 cloves garlic", "3 tbsp olive oil", "Thyme, oregano, and fresh basil"
            ],
            instructions: [
                "Sauté onion and bell pepper in olive oil.",
                "Add garlic, then eggplant, zucchini, and squash; cook for 7 minutes.",
                "Stir in tomatoes and dried herbs.",
                "Cover and simmer for 15–20 minutes until tender.",
                "Garnish with fresh basil."
            ]
        });

        server.create("recipe", {
            id: "5",
            name: "Red Lentil Dal",
            shortDescription: "A creamy, protein-rich Indian staple infused with warming spices for ultimate plant-based comfort.",
            prepareTime: "5 minutes",
            cookTime: "20 minutes",
            dietaryTag: "Allergen-Free",
            servings: 4,
            image: RecipeImages.recipe5,
            ingredients: [
                "1 cup red lentils", "3 cups broth", "1 can coconut milk", "1 onion", 
                "2 cloves garlic", "1 tbsp ginger", "Turmeric, cumin, garam masala", 
                "1 tbsp coconut oil", "Cilantro and lemon"
            ],
            instructions: [
                "Sauté onion, garlic, and ginger in oil.",
                "Add spices and toast briefly.",
                "Stir in lentils and broth; simmer for 20 minutes.",
                "Stir in coconut milk and season with salt.",
                "Garnish with cilantro and lemon."
            ]
        });

        server.create("recipe", {
            id: "6",
            name: "Miso Soup",
            shortDescription: "A simple, savory Japanese broth with tofu and seaweed that promotes gut health.",
            prepareTime: "5 minutes",
            cookTime: "5 minutes",
            dietaryTag: "Soy",
            servings: 2,
            image: RecipeImages.recipe6,
            ingredients: [
                "3 cups dashi or water", "3 tbsp miso paste", "½ cup firm tofu (cubed)", 
                "1 tbsp dried wakame", "2 green onions (sliced)"
            ],
            instructions: [
                "Simmer water/dashi and add wakame for 2 minutes.",
                "Add tofu and simmer for 1 minute.",
                "Remove from heat; whisk miso paste with a little broth, then stir back into the pot.",
                "Serve immediately topped with green onions."
            ]
        });

        server.create("recipe", {
            id: "7",
            name: "Roasted Salmon",
            shortDescription: "Flaky, Omega-3 rich salmon flavored with bright citrus and aromatic herbs for a quick dinner.",
            prepareTime: "5 minutes",
            cookTime: "10 minutes",
            dietaryTag: "Fish",
            servings: 2,
            image: RecipeImages.recipe7,
            ingredients: [
                "2 salmon fillets", "1 tbsp olive oil", "1 lemon (sliced)", 
                "2 cloves garlic (minced)", "1 tbsp fresh dill", "Salt and pepper"
            ],
            instructions: [
                "Preheat oven to 400°F (200°C).",
                "Rub salmon with oil, garlic, and herbs.",
                "Top with lemon slices.",
                "Roast for 10–12 minutes until flaky."
            ]
        });

        server.create("recipe", {
            id: "8",
            name: "Caprese Chicken",
            shortDescription: "Juicy chicken breast topped with and tomatoes for a healthy Italian-inspired meal.",
            prepareTime: "10 minutes",
            cookTime: "10 minutes",
            dietaryTag: "Dairy",
            servings: 2,
            image: RecipeImages.recipe8,
            ingredients: [
                "2 chicken breasts", "2 slices fresh mozzarella", "1 tomato (sliced)", 
                "1 tbsp olive oil", "Italian seasoning", "Fresh basil", "Balsamic glaze"
            ],
            instructions: [
                "Season chicken and sear in a skillet for 5 minutes per side.",
                "Top with tomato and mozzarella slices.",
                "Cover and cook until cheese is melted.",
                "Drizzle with balsamic glaze and top with basil."
            ]
        });

        server.create("recipe", {
            id: "9",
            name: "Sheet-Pan Fajitas",
            shortDescription: "A vibrant, one-pan Mexican feast featuring seasoned lean meats and roasted bell peppers.",
            prepareTime: "10 minutes",
            cookTime: "20 minutes",
            dietaryTag: "Gluten",
            servings: 4,
            image: RecipeImages.recipe9,
            ingredients: [
                "1 lb chicken or steak strips", "3 bell peppers (sliced)", "1 onion (sliced)", 
                "2 tbsp olive oil", "Fajita seasoning (chili, cumin, garlic)", "Tortillas", 
                "Toppings: Lime, avocado, sour cream"
            ],
            instructions: [
                "Preheat oven to 400°F (200°C).",
                "Toss meat, peppers, and onions with oil and spices on a sheet pan.",
                "Spread in a single layer.",
                "Bake for 20 minutes until charred and cooked through.",
                "Serve with warm tortillas."
            ]
        });
    },

    routes() {
        this.namespace = "api"
        this.logging = false

        this.get("/recipes", (schema) => {
            return schema.recipes.all()
        })

        this.get("/recipes/:id", (schema, request) => {
            let id = request.params.id
            return schema.recipes.find(id)
        })
    }
})
export default async function getRecipeFromChefClaude(ingredientsArr) {
    try {
        const response = await fetch('/.netlify/functions/getRecipe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ingredients: ingredientsArr })
        });

        if (!response.ok) {
            throw new Error("Failed to fetch recipe from AI Chef.");
        }

        const data = await response.json();
        return data.recipe;
    } catch (err) {
        console.error("Chef Claude Error:", err);
        return "I'm sorry, I couldn't cook up a recipe right now. Please try again!";
    }
}

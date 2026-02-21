import RecipeCard from "./cards/RecipeCard"

export default function MoreRecipes({recipes, paramsId}) {

  const otherRecipes = recipes.filter(recipe => String(recipe.id) !== String(paramsId));

  const randomThree = otherRecipes
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

   const cards = randomThree.map(
        (card, index) => (
            <RecipeCard key={index} recipes={card}/>
        )
   )

  return (
    <div className="container-pro pd-sm">
        <h3 className='mb-7'>More Recipes</h3>

        <div className='flex flex-col items-center gap-4 lg:flex-row lg:justify-between'>
            {cards}
        </div>
    </div>
  )
}


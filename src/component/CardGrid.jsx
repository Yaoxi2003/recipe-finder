import RecipeCard from "./cards/RecipeCard"

export default function CardGrid({recipes}) {
  
    const cards = recipes.map( recipe => 
    (<RecipeCard recipes={recipe} key={recipe.id}/>)
    )

  return (
    <div className="container-pro pb-20 min-h-[300px]">
      <div className='justify-items-center
            grid grid-cols-1 sm:grid-cols-2 gap-5 
            lg:grid-cols-3 lg:gap-8'>
        {cards}
      </div>
    </div>
  )
}


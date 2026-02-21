import { Link } from "react-router-dom"
import { Icons } from "../assets/images/Img"

export default function RecipeDetailContent({recipe}) {

    const ingredientContext = recipe.ingredients.map(
        (item, index) => (
            <li key={index}>{item}</li>
        )
    )
    const instructionContext = recipe.instructions.map(
        (item, index) => (
            <li key={index}>{item}</li>
        )
    )

  return (
    <section>
        <div className='container-pro pd-xs lg:pd-sm'>

            {/* Link to back home */}
            <span className="flex items-center gap-2 mb-5 lg:mb-10">
                <Link to='..' relative="path" 
                className="text-slate-400 cursor-pointer hover:text-rose-600 transition-colors duration-300">
                    Recipes
                </Link>
                <span>/</span>
                <p>{recipe.name}</p>
            </span>
            
            <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">

                {/* display image */}
                <picture className="w-full lg:w-[45%] lg:order-2">
                    <img src={recipe.image} alt={recipe.name}
                    className="rounded-lg shadow-lg w-full h-[280px] sm:h-[400px] lg:h-[560px] object-cover" />
                </picture>

                {/* recipe context */}
                <article className="w-full lg:w-1/2 flex flex-col gap-6">
                    <h2 className="leading-none mb-4">{recipe.name}</h2>
                    <p>{recipe.shortDescription}</p>

                    <div className="flex flex-wrap items-center gap-3">
                        <span className="flex items-center gap-2">
                            <img src={Icons.functional.guest} alt="" />
                            {`Serving: ${recipe.servings}`}
                        </span>
                        <span className="flex items-center gap-2">
                            <img src={Icons.functional.timer} alt="" />
                            {`Prep: ${recipe.prepareTime}`}
                        </span>
                        <span className="flex items-center gap-2">
                            <img src={Icons.functional.food} alt="" />
                            {`Cook: ${recipe.cookTime}`}
                        </span>
                    </div>

                    <div>
                        <h3 className="mb-3">Ingredients:</h3>
                        <ul className="list-style ul-style">
                            {ingredientContext}
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-3">Instructions:</h3>
                        <ul className="list-style ul-style">
                            {instructionContext}
                        </ul>
                    </div>
                </article>
            </div>

        </div>
    </section>
  )
}

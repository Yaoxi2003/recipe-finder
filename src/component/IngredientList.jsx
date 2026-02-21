import ModernBtn from './buttons/ModernBtn'
import {Icons} from '../assets/images/Img'
import { useState, useEffect, useRef } from 'react'
import getRecipeFromChefClaude from '../ai'
import ReactMarkdown from "react-markdown"



export default function IngredientList() {

  const {plus, tableList, fish, book, cheese} = Icons.functional

  const [ingredients, setIngredients] = useState([])
  const [recipe, setRecipe] = useState('')
  const [isLoading, setIsLoading] = useState(null)
  const recipeSection = useRef(null);
  
// add ingredient
  function addIngredient(formData) {
    const ingredient = formData.get('ingredients').toLowerCase()
    if (ingredient) {
      setIngredients(prev => [...prev, ingredient])
    }
  }

  // get recipe from claude
  async function getRecipe() {
      setIsLoading(true); 
    try {
      const recipeMarkdown = await getRecipeFromChefClaude(ingredients);
      setRecipe(recipeMarkdown);
    } catch (error) {
      console.error("Failed to get recipe:", error);
    } finally {
      setIsLoading(false); 
    }
  }


// convert the ingredients to visual ingredient list
  const ingredientList = ingredients.map(
    (item, index) => (
        <div key={index} className='rounded-xl border-2 border-slate-200 
        text-slate-700 px-12 py-2 bg-transparent'>
          <p>{item}</p>
        </div>
    )
  )

  useEffect(() => {
    if (recipe && recipeSection.current) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);

  return (
    <>
    <section className='relative'>
        
        {/* content */}
        <div className="container-pro pd-sm lg:pd-md">
            <h3 className='mb-8'>Enter your ingredients on hands</h3>
            <form action={addIngredient} className='flex flex-col sm:flex-row gap-6 lg:w-[70%] mb-8'>
                <input className='rounded-lg border-1 border-slate-300 p-4 sm:w-[70%]' 
                type='text' name='ingredients' placeholder='Eg.Chicken'
                aria-label='enter some ingredients'/>
                <ModernBtn>
                    <div className='flex items-center gap-3'>
                        <img src={plus} alt="" />
                        <p className='text-white'>Add</p>
                    </div>
                </ModernBtn>
            </form>

            { ingredients.length > 0 ?
            <>
              <h3 className='flex items-center gap-4 mb-6'>
                <img src={cheese} alt='' className='w-10' />
                Your Ingredient:
              </h3>
              <div className='lg:w-[70%] flex gap-4 flex-wrap'>
                {ingredientList}
                <button className='flex items-center gap-2 rounded-xl border-2 border-slate-200 text-red-600 px-12 py-2 bg-transparent'
                        onClick={() => {setIngredients([])}}>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#E7000B"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"/></svg>
                  Reset
                </button>
              </div>
            </>
            : null
            }

            {/* get ready for recipe CTA */}
            <div className='mt-20 flex flex-col lg:flex-row lg:items-center lg:justify-between'>
              <div className='mb-6 max-w-[760px]'>
                <h2 className='mb-6'>Ready for a recipe?</h2>
                <p>
                  Enter at <span className='font-black font-secondary text-black'>least 6 ingredients</span> to get started. 
                  Not feeling the first option? Just hit “Get a Recipe” again for a new suggestion! Remember — these are just smart ideas, not strict instructions. 
                  Feel free to tweak the recipe to suit your taste!
                </p>
              </div>
              
              <button className='primary-btn disabled:opacity-50 disabled:cursor-not-allowed disabled:grayscale'
                  disabled={ingredients.length < 6} 
                  onClick={getRecipe}
                  >
                <div className='flex items-center gap-4'>
                  <img src={tableList} alt="" />
                  {isLoading ? 'Loading..' : ' Get a recipe'}
                </div>
              </button>

            </div>
        </div>
    </section>
  
    {/* Recipe generated section */}
   {recipe && (
    <section ref={recipeSection}>
      <div className="container-pro pt-5 pb-20 border-t-1 border-slate-300">
       <ReactMarkdown
          components={{
            // Render the Recipe Title
            h2: ({ children }) => <h2 className="text-t3-desktop font-black mb-6">{children}</h2>,

            // Match H3 and apply the card styles
            h3: ({ children }) => {
              const content = String(children);
              const isIngredient = content.toLowerCase().includes('ingredient');
              const icon = isIngredient ? fish : book;
              
              return (
                <div className="flex items-center gap-3 mt-8 mb-4">
                  <img src={icon} alt="" className="w-8 h-8" />
                  <h3 className="text-t3-mobile">{children}</h3>
                </div>
              );
            },
            h4: ({children}) => <h4 className='text-t3-desktop text-slate-900 font-semibold font-secondary mb-5'>{children}</h4>,

            // Wrap lists in the white cards
            ul: ({ children }) => (
              <div className="bg-white p-8 rounded-2xl border border-blue-100 shadow-sm mb-8">
                <ul className="list-style ul-style">{children}</ul>
              </div>
            ),
            ol: ({ children }) => (
              <div className="bg-white p-8 rounded-2xl border border-blue-100 shadow-sm">
                <ol className="list-style ol-style">{children}</ol>
              </div>
            ),
          }}
        >
          {recipe}
        </ReactMarkdown>
      </div>
    </section>
  )}
    </>

  )
}

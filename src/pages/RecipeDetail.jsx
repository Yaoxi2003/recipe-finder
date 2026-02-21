import Content from '../component/RecipeDetailContent' 
import MoreRecipes from '../component/MoreRecipes'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function RecipeDetail() {
    const params = useParams()
    const [recipes, setRecipes] = useState([])
    const [recipe, setRecipe] = useState(null)
    
    useEffect(() => {
        fetch(`/api/recipes/${params.id}`)
            .then(res => res.json())
            .then(data => setRecipe(data.recipes))
    }, [params.id])

    useEffect(() => {
        fetch(`/api/recipes`)
            .then(res => res.json())
            .then(data => setRecipes(data.recipes))
    }, [])

  return (
    <main className='overflow-hidden'>
        {recipe 
            ? <>
                <Content recipe={recipe} />
                <MoreRecipes recipes={recipes} paramsId={params.id} />
               </>
            : <h2 className='container-pro pd-sm'>Loading...</h2>
        }
    </main>

  )
}

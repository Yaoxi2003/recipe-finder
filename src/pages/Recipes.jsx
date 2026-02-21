import RecipeHero from '../component/RecipeHero'
import FilterRow from '../component/FilterRow'
import CardGrid from '../component/CardGrid'
import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { HeroImages } from '../assets/images/Img'

export default function Recipes() {
  const [recipes, setRecipes] = useState([])
  const [cookTime, setCookTime] = useState(null)
  const [preTime, setPreTime] = useState(null)
  const [searchInput, setSearchInput] = useState("") // Initialize as empty string
  const [currentPage, setCurrentPage] = useState(1)

  // 1. Fetch data once on mount
  useEffect(() => {
    fetch('/api/recipes')
      .then(res => res.json())
      .then(data => setRecipes(data.recipes))
  }, [])

  // 2. Derive Filtered Recipes
  const filteredRecipes = useMemo(() => {
    return recipes.filter(recipe => {
      const matchesPrep = preTime ? recipe.prepareTime === preTime : true;
      const matchesCook = cookTime ? recipe.cookTime === cookTime : true;
      const matchesSearch = searchInput 
        ? recipe.name.toLowerCase().includes(searchInput.toLowerCase()) 
        : true;

      return matchesPrep && matchesCook && matchesSearch;
    });
  }, [recipes, preTime, cookTime, searchInput]);

  // 3. Reset to page 1 whenever filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [preTime, cookTime, searchInput])

  // 4. Calculate Pagination based on the FILTERED list
  const itemsPerPage = 6
  const totalPages = Math.ceil(filteredRecipes.length / itemsPerPage)
  
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  
  // These are the specific recipes shown on the current page
  const currentItems = filteredRecipes.slice(indexOfFirstItem, indexOfLastItem)

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } }
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  }

  return (
    <motion.main className='overflow-hidden min-h-screen pb-20' initial="hidden" animate="show" variants={container}>
      {/* background image */}
      <picture className='fixed w-full inset-0 -z-20'>
        <source media='(min-width: 600px)' srcSet={HeroImages.honeyCase}  />  
        <img src={HeroImages.honeyMobile} className='object-cover w-full' alt='Honey flowing through pancakes'/>  
      </picture>

      <div className='bg-slate-900 opacity-70 fixed inset-0 -z-10 w-full'></div>

      <motion.section variants={item}>
        <RecipeHero />
      </motion.section>

      <motion.section variants={item}>
        <FilterRow 
        cookTime={cookTime} setCookTime={setCookTime}
        preTime={preTime} setPreTime={setPreTime} 
        searchInput={searchInput} setSearchInput={setSearchInput}
        />
      </motion.section>

      {/* Render only the items for the current page */}
      <motion.section variants={item}>
        <CardGrid recipes={currentItems} />
      </motion.section>

      {/* 5. Pagination Controls - only show if there's more than 1 page */}

    <div className="min-h-[60px]"> {/* Keeps space so page doesn't jump */}
    {totalPages > 1 && (
      <motion.section 
        variants={item} 
        initial="hidden"
        whileInView="show" // Use this for elements that appear later
        viewport={{ once: true }}
        className="flex justify-center gap-2 mt-12"
      >
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              currentPage === i + 1 
                ? 'bg-rose-700 text-white shadow-md' 
                : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </motion.section>
    )}
    </div>

      {/* Show "No Results" if the filter killed all matches */}
      {filteredRecipes.length === 0 && recipes.length > 0 && (
        <motion.section variants={item} className="text-center text-white mt-10">
          <p className="text-xl">No recipes match your filters.</p>
        </motion.section>
      )}
    </motion.main>
  )
}
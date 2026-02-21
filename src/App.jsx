import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { motion } from "motion/react"

import Homepage from './pages/Homepage'
import ChefPage from './pages/ChefPage'
import Layout from './pages/Layout'
import Recipes from './pages/Recipes'
import RecipeDetail from './pages/RecipeDetail'
import ScrollToTop from './component/UX/ScrollToTop'

function App() {
  
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='chef' element={<ChefPage />} />
          <Route path='recipes' element={<Recipes />} />
          <Route path='recipes/:id' element={<RecipeDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App



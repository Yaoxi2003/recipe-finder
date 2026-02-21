import ChefHero from "../component/ChefHero"
import IngredientList from '../component/IngredientList'
import { HeroImages } from "../assets/images/Img"
import { motion } from 'framer-motion'

export default function ChefPage() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } }
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  }

  return (
    <motion.main className="overflow-hidden relative" initial="hidden" animate="show" variants={container}>
      {/* Backimage */}
      <img src={HeroImages.flowBubble} alt="" 
      className="object-cover absolute w-[70%] top-0 left-0 -z-30 opacity-70"/>

      <motion.section variants={item}>
        <ChefHero />
      </motion.section>

      <motion.section variants={item}>
        <IngredientList />
      </motion.section>
    </motion.main>

  )
}


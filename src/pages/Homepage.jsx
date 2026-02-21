import Hero from '../component/Hero'
import Benefit from '../component/Benefit'
import HomeAIChef from "../component/HomeAIChef"
import Feature from '../component/HomeFeature'
import { motion } from 'framer-motion'

const item = {
  hidden: { opacity: 0, y: 30 }, // Increased y for a more noticeable reveal
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: 'easeOut' } 
  }
}

export default function Homepage() {
  return (
    <main className='overflow-hidden'>
      {/* Hero usually animates on load because it's at the top */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={item}
      >
        <Hero />
      </motion.section>

      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={item}
      >
        <Benefit />
      </motion.section>

      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={item}
      >
        <HomeAIChef />
      </motion.section>

      <motion.section 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={item}
      >
        <Feature />
      </motion.section>
    </main>
  )

}



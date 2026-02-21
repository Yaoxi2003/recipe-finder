import { Outlet } from "react-router-dom"
import Nav from '../component/Nav'
import Footer from '../component/Footer'
import React from 'react'
import { motion } from 'framer-motion'

export default function Layout() {

  const [menuOpen, setMenuOpen] = React.useState(false)

  function toggleMenu() {
  setMenuOpen(prev => !prev)
  }

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.06 } }
  }

  const item = {
    hidden: { opacity: 0, y: 6 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } }
  }

  return (
    <>
        <Nav menuOpen={menuOpen} toggleMenu={toggleMenu} />
        <motion.div initial="hidden" animate="show" variants={container}>
          <motion.div variants={item}>
            <Outlet />
          </motion.div>
        </motion.div>
        <Footer />
    </>
  )
}

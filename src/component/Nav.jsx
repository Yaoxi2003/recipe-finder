import {Icons} from '../assets/images/Img'
import { NavLink } from 'react-router-dom'

export default function Nav({menuOpen, toggleMenu}) {
  return (
    <div className='bg-rose-800 w-full'>
      <nav className='container-pro pd-xs
                    text-white flex items-center justify-between'>
          
          {/* mobile & tablet menu bar */}
            {menuOpen && (
              <>
              {/* dark background overlay */}
              <div className='fixed inset-0 bg-black/70 z-10'></div>
              {/*  menu background */}
              <div className='fixed top-0 right-0 w-2/3 sm:w-1/2 h-full bg-rose-800 z-20
                            p-10'>

                {/* nav menu */}
                <ul className='flex flex-col gap-8'>
                  <li>
                    <button onClick={toggleMenu}>
                      <img src={Icons.functional.close} alt="Close" className='w-[40px]'/>
                    </button>
                  </li>

                  <li className='link-style text-t4-desktop'>
                    <NavLink onClick={toggleMenu} to='/'>Home</NavLink>
                  </li>

                  <li className='link-style text-t4-desktop'>
                    <NavLink onClick={toggleMenu} to='/recipes'>Recipes</NavLink>
                  </li>

                  <li className='link-style text-t4-desktop'>
                    <NavLink onClick={toggleMenu} to='/chef'>AI Chef</NavLink>
                  </li>
                </ul>
              </div>         
              </>
            )}

          {/* desktop navbar */}
          <picture>
            <img src={Icons.branding.logo} alt="Logo" />
          </picture>

          <ul className='items-center gap-15 hidden lg:flex'>
              <li className='link-style'>
                <NavLink to='/'>Home</NavLink>
              </li>

              <li className='link-style'>
                <NavLink to='/recipes'>Recipes</NavLink>
              </li>

              <li className='link-style'>
                <NavLink to='/chef'>AI Chef</NavLink>
              </li>
          </ul>

          {/* small device menu */}
          <button onClick={toggleMenu} className='lg:hidden'>
            <img src={Icons.functional.bars} alt="Menu" className='w-[40px]'/>
          </button>

      </nav>
    </div>
  )
}

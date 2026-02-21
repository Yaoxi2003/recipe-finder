import {Icons} from '../assets/images/Img'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  const {logo} = Icons.branding
  const {facebook, instagram, twitter, pinterest} = Icons.social

  return (
    <footer className='bg-rose-950'>
      <div className='container-pro py-7'>

        <div className='mb-6 flex flex-col sm:flex-row sm:justify-between items-center gap-6'>
          <img src={logo} alt="logo" />
          <ul className='flex gap-5 items-center'>
            <li>
              <a href="">
                <img src={facebook} alt="" />
              </a>
            </li>
          
            <li>
              <a href="">
                <img src={twitter} alt="" />
              </a>
            </li>
          
            <li>
              <a href="">
                <img src={pinterest} alt="" />
              </a>
            </li>
          
            <li>
              <a href="">
                <img src={instagram} alt="" />
              </a>
            </li>
          </ul>
        </div>

        <div className='flex flex-col items-center sm:flex-row sm:justify-between gap-6'>
          <nav>
            <ol className='flex flex-col sm:flex-row gap-6'>
              <li className='footer-style'><NavLink to='/'>Home</NavLink></li>
              <li className='footer-style'><NavLink to='/recipes'>Recipes</NavLink></li>
              <li className='footer-style'><NavLink to='/chef'>AI Chef</NavLink></li>
            </ol>
          </nav>
          <p className='text-rose-300/80 text-t5'>© 2026 Ingreedy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

import {HeroImages} from '../assets/images/Img'
import { Link } from 'react-router-dom'
import {HomePage} from '../assets/constant/TextContent'

export default function Hero() {

  const {title, description} = HomePage.hero

  return (
    <section className='relative'>
      {/* background image */}
      <picture className='absolute inset-0 -z-20'>
        <img src={HeroImages.heroHomepage} 
        className='w-full h-full object-cover'
        alt="A dedicated cake on a white plate where fruit and bread are arranged around it" />

      </picture>
      {/* mask */}
      <div className='absolute inset-0 -z-10 bg-black/30'></div>

      <div className='container-pro py-45
                    flex justify-center lg:justify-end'>

        <div className='flex flex-col gap-10 items-start'>
          <h1 className='lg:max-w-[500px]'>{title}</h1>
          <p className='max-w-[480px] text-white'>{description}</p>
          <Link className='primary-btn' to='/recipes'>
            Browse Recipes
          </Link>
        </div>
      </div>
    </section>
  )
}

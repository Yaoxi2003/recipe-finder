import { Link } from "react-router-dom"
import { HeroImages } from "../assets/images/Img"
import TextContent from '../assets/constant/TextContent'

export default function HomeAIChef() {
  const { aiChefHomepage } = HeroImages
  const { title, description } = TextContent.HomePage.features
  return (
    <section>
      <div className="container-pro pd-sm 
                    flex flex-col lg:flex-row lg:justify-between lg:items-center gap-12 lg:gap-20">
        <picture className='lg:w-1/2'>
          <img src={aiChefHomepage} alt="AI Chef" className="rounded-lg w-full max-h-[384px] lg:max-h-[600px] object-cover" />
        </picture>

        <div className='text-center sm:text-left lg:w-1/2 flex flex-col items-center lg:items-start'>
          <h2 className='mb-8'>{title}</h2>
          <p className='mb-8 max-w-[480px]'>{description}</p>
          <Link to='/chef' className="primary-btn ">Start exploring</Link>
        </div>
      </div>
    </section>
  )
}

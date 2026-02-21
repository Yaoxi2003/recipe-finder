import TextContent from "../assets/constant/TextContent"
import { Link } from "react-router-dom"

export default function HomeFeature() {
  const {title, description} = TextContent.HomePage.cta
  const {highlights} = TextContent.HomePage.cta


  const ctaCards = highlights.map((item, index) => (
    item.title === 'Quick & Easy' 
    ? <div className="relative sm:col-span-2 max-h-[350px] 
                    p-8 flex flex-col items-start justify-center gap-6" key={index}>
        <img src={item.cardImg} alt={item.description} className="absolute inset-0 h-full w-full -z-10 object-cover" />
        <h3 className="text-white">{item.title}</h3>
        <p className="text-white">{item.description}</p>
        <Link to='/recipes' className="primary-btn">Browse Recipes</Link>
    </div>
    : <div className="relative col-span-1 max-h-[350px] 
                    p-8 flex flex-col gap-6" key={index}>
        <img src={item.cardImg} alt={item.description} className="absolute inset-0 h-full w-full -z-10 object-cover" />
        <img src={item.icon} alt="" className="w-10" />
        <h3 className="text-white">{item.title}</h3>
        <p className="text-white">{item.description}</p> 
    </div>
  )
  )

  return (
    <section>
      <div className='container-pro pd-md'>
        <h2 className="mb-3">{title}</h2>
        <p className="mb-6">{description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ctaCards}
        </div>
      </div>
    </section>
  )
}

import TextContent from '../assets/constant/TextContent'

export default function Benefit() {
  const {title, benefits} = TextContent.HomePage.about
  const benefitCard = benefits.map((item, index) => (
    <div className='flex flex-col items-center sm:items-start lg:items-center gap-6 max-w-[400px]' key={index}>
      <img src={item.img} alt={item.title} className='w-18'/>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  ))

  return (
    <section>
      <div className='container-pro pd-md text-center sm:text-left lg:text-center'>
        <h2 className='mb-15 lg:mb-25'>{title}</h2>
        <div className='flex flex-col lg:flex-row gap-12 lg:justify-between'>
          {benefitCard}
        </div>
      </div>
    </section>
  )
}



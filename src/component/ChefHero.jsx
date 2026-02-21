import {HeroImages} from '../assets/images/Img'

export default function ChefHero() {

  return (
    <section>
        <div className='container-pro pt-20 pb-5
                    flex flex-col lg:flex-row lg:justify-between items-center gap-10'>
            <div className='lg:w-1/2'>
                <h2 className='mb-6'>AI Chef - Meal Generator</h2>
                <p className='max-w-[540px]'>Just tell us what you've got — our AI turns your ingredients into delicious, personalized recipes in seconds. Whether you're working with leftovers or planning a meal, it finds dishes that fit your dietary needs, cooking style, and taste preferences.</p>
            </div>
            <picture className='lg:w-1/2 w-full shadow-lg'>
                <img src={HeroImages.aiChefHero}
                alt="A chef who is chopping the ingredients" 
                className='object-cover rounded-lg w-full h-[300px] lg:h-[500px]'/>
            </picture>
        </div>
    </section>
  )
}

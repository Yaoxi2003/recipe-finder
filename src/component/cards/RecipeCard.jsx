import { Icons } from "../../assets/images/Img"
import { Link } from "react-router-dom"

export default function RecipeCard({recipes}) {

const {id, image, shortDescription, dietaryTag, name, prepareTime, cookTime} = recipes 

  return (
    <div key={id} className="rounded-xl bg-white max-w-[400px] shadow-md">
        <img src={image} alt={shortDescription} className="h-[260px] w-full object-cover rounded-t-xl"/>

        <article className="p-4 flex flex-col gap-4">
            <h4 className="text-rose-800 bg-rose-100 rounded-sm py-1 px-4 w-fit">{dietaryTag}</h4>
            <p className="font-semibold text-slate-900">{name}</p>
            <h4 className="line-clamp-2 text-slate-700">{shortDescription}</h4>

            <div className="flex justify-between gap-4 items-center">
                <div className="flex items-center gap-3 ">
                    <img src={Icons.functional.timer} alt="" />
                    <h4>{prepareTime}</h4>
                </div>
                <div className="flex items-center gap-3 ">
                    <img src={Icons.functional.food} alt="" />
                    <h4>{cookTime}</h4>
                </div>
            </div>

            <Link to={`/recipes/${id}`} className="primary-btn recipe-btn">View Recipe</Link>
        </article>
    </div>
  )
}

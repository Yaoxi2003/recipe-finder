import { Icons } from '../../assets/images/Img'

export default function SearchBar({children, setSearchInput}) {

  return (
    <div className='relative group w-full sm:w-1/2 lg:w-1/3
                     rounded-lg border border-slate-300 focus-within:ring-2 focus-within:ring-rose-700
                     bg-white transition-all duration-200'>
      <img src={Icons.functional.searchIcon} alt="" 
      className='absolute top-1/2 -translate-y-1/2 left-3 w-5 pointer-events-none 
      opacity-50 group-focus-within:opacity-100'/>

      <input type="text" name='searchInput' placeholder={children}
              onChange={(e) => setSearchInput(e.target.value)}
              className='w-full bg-transparent pl-10 pr-4 py-2 outline-none 
              text-slate-900 placeholder:text-slate-400'/>
    </div>
  )
}


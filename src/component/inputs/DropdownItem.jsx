export default function DropdownItem({children, setSelected, value}) {

  return (
    <label className='flex items-center gap-3 cursor-pointer group'>
        <input 
            type='radio' 
            name='items' 
            value={value}
            onChange={(e) => setSelected(e.target.value)}
            className='appearance-none w-6 h-6 rounded-full border-2 border-slate-300 bg-white hover:ring-2 
            ring-slate-300 checked:border-4 checked:border-white checked:ring-2
            transition-all duration-200 ease-in-out cursor-pointer
            checked:bg-rose-700 checked:ring-rose-700'
        />
        <span className="text-slate-700 text-t5">{children}</span>
    </label>
  )
}

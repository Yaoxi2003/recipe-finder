import { useState } from "react";

export default function Dropdown({children, label, selected, setSelected}) {

  const [isOpen, setIsOpen] = useState(false)

  function getOption(formData) {
    if (formData.get('action') === 'clear') {
      setIsOpen(false)
      setSelected(null)
    }
  }

  return (
    <form className='relative group' action={getOption}>
      <div 
        onClick={() => setIsOpen(prev => !prev)}
        className='bg-white w-full sm:w-[200px] rounded-lg border border-slate-300 
        group-hover:ring-2 group-hover:ring-rose-700 py-1.5 px-3 transition-colors duration-300
        flex items-center justify-between gap-3 cursor-pointer text-slate-900 select-none'>
          {/* Show the selected value in the label if you want */}
          {selected ? `${selected}` : label}
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"
            className={`transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}
          >
          <path d="M480-345 240-585l56-56 184 183 184-183 56 56-240 240Z"/></svg>
      </div>

      {isOpen &&
        <div className='absolute top-12 left-0 z-10 w-[220px] p-4 rounded-lg bg-white border border-slate-200 flex flex-col gap-3 shadow-xl'>

        {/* dropdown item here */}
         {children}

          <button 
            type="submit" 
            name="action"
            value="clear"
            className='text-slate-500 text-sm text-left hover:text-red-700 hover:underline mt-2'>
            Clear
          </button>

        </div>
      }
    </form>
  )
}


// How to use

  // <Dropdown 
  // label={label} 
  // isOpen={isOpen} 
  // setIsOpen={setIsOpen} 
  // selected={selected}
  // setSelected={setSelected} >
    
  //   <DropdownItem value={0} setSelected={setSelected} >0 minutes</DropdownItem>
  //   <DropdownItem value={5} setSelected={setSelected} >5 minutes</DropdownItem>
  //   <DropdownItem value={10} setSelected={setSelected} >10 minutes</DropdownItem>

  // </Dropdown>

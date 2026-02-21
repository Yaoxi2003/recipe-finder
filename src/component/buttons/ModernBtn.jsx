import { clsx } from 'clsx'

export default function ModernBtn({children, varient='rose'}) {

  const styleClasess = {
    rose: 'bg-rose-700 text-white hover:bg-rose-300 hover:text-white focus:outline-rose-700',
    blue: 'bg-blue-700 text-white hover:bg-blue-300 hover:text-white focus:outline-blue-700'
  }

  return (
    <button className={clsx(`focus:outline-2 outline-offset-2 transition-colors duration-300 
                            px-7 py-3 rounded-md cursor-pointer font-bold text-body
                            flex justify-center items-center`,
                            styleClasess[varient])
                        }>
      {children}
    </button>
  )
}


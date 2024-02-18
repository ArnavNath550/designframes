import React from 'react'

function Button({children}) {
  return (
    <div className='relative button-shadow bg-primary hover:opacity-80 hover:top-[-2px] hover:text-shadow transition-all p-2 pl-3 pr-3 text-s relative inline-flex items-center rounded-md cursor-pointer'>
        {children}
    </div>
  )
}

export default Button
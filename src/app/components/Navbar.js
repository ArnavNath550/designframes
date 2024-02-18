import React from 'react'

function Navbar() {
  return (
    <div className="w-full m-auto fixed top-0 left-0 z-10 border-b border-gray-100 backdrop-blur-[12px]">
      <div className="w-full p-5 pt-2 pb-2 flex justify-center items-center flex-row">
          <img src="/logo.svg" className="w-[195px]" />
      </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import Card from './ui/Card'

function Showcases() {
  return (
    <div className="p-10 w-full h-screen page-showcases relative">
        <div className="text-center text-xl">
        <span className="text-gradient my-6 font-semibold text-6xl md:text-5xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">Here is some of <br /> our Work</span>
        </div>
        <div className="flex flex-row">
          <Card>
            <div className="w-[300px]">
              Some card content
            </div>
          </Card>
          <Card>
          <div className="w-[100px]">
              Some card content
            </div>
          </Card>
        </div>
    </div>
  )
}

export default Showcases
import React from 'react'
import Button from './ui/Button'

function Hero() {
  return (
    <div className="page-hero p-5 flex flex-col items-center justify-center mx-auto max-w-[120rem] w-full px-[2.4rem] pt-[6.4rem] text-center bg-black bg-page-gradient h-screen">
        <span className="text-gradient my-6 font-semibold text-6xl md:text-5xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">Bring your ideas to <span className="flicker-animation">life</span></span>
        <p class="mb-5 text-md text-gray-300 md:text-sm translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            Meet the new standard for modern software development. <br />
            Streamline issues, sprints, and product roadmaps.
        </p>
        <div>
            <Button>
                <span className="font-medium text-m">Book a Call</span>
            </Button>
        </div>
        
    </div>
  )
}

export default Hero
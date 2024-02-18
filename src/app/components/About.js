import React from 'react'
import Button from './ui/Button'

function About() {
  return (
<div className="p-10 w-full bg-warm-gradient page-about">
        <div className="w-[50%] flex flex-col gap-3">
            <div className="flex flex-col gap-4">
            <div className="text-xl">
                <strong className="animate-fade-in">We bring your ideas to life,</strong> <br />
                <span className="animate-fade-in opacity-0 [--animation-delay:400ms]">at break next speed.</span>
            </div>
            <div>
            <p class="mb-5 text-md text-gray-300 md:text-sm translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            We will help you ship visually perfect app/website designs at break next speed.
            </p>
            </div>
            </div>
            <div>
                <Button>
                    <span>Make that idea, real.</span>
                </Button>
            </div>
        </div>
    </div>
  )
}

export default About
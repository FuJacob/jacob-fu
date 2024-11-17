'use client'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const TypeWriterText = () => {
  return (
    <div className='h-12 flex justify-center mb-10'>
       <h2 className="font-bold text-5xl text-primary"><Typewriter
            words={['university of waterloo student', 'studying cs & finance', 'graduating in \'29', 'looking for software co-op']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
          /></h2>
          </div>
          
    )
}

export default TypeWriterText
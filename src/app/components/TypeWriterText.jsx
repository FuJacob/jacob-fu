'use client'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const TypeWriterText = () => {
  return (
    <div className='h-12 flex justify-center'>
       <h2 className="font-bold italic"><Typewriter
            words={['University of Waterloo Student', 'Studying Computer Science & Finance (BCFM)', 'Graduating in \'29', 'Seeking Software Internships']}
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
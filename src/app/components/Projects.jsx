import React from 'react'
import Card from './Card'
const Projects = () => {
  return (
    <>    <div className="flex flex-col items-center justify-center space-y-10 min-h-screen">
                <h1 className="text-7xl font-black text-center">About Me</h1>
            <div className="grid grid-cols-3 gap-3">
            <div> <Card /> </div>
            <div> <Card /> </div>
            <div> <Card /> </div>
            </div>
        </div>
</>
  )
}

export default Projects
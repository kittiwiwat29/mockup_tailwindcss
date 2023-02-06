import React from 'react'
import {
    CloudIcon,
    DatabaseIcon,
    NewspaperIcon,    
    ServerIcon

} from '@heroicons/react/24/solid'


const Hero = () => {
  return (
    <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between '>
        <div className='grid md:grid-cols-2 max-w-[1024px] m-auto'>
       <ServerIcon className='w-10 fill-sky-400 '></ServerIcon>       
       <CloudIcon className='w-10 fill-sky-400'></CloudIcon>
       <NewspaperIcon className='w-10 fill-sky-400'></NewspaperIcon>
       </div>

    </div>
  )
}

export default Hero
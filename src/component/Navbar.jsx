import React,{useState} from 'react'
import {Bars4Icon} from '@heroicons/react/24/outline'




const Navbar = () => {
    const [nav,setNav] =useState(false);
    const handleClick=()=>setNav(!nav);
    return (
    <div className='w-screen h-[80px] z-10  bg-zinc-200 fixed drop-shadows-lg'>
        <div className='px-2 flex justify-center items-center w-full h-full'>
            <div className='flex items-center'>
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>Brand</h1> 

                        <ul className='hidden md:flex items-center'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Support</li>
                        <li>Platforms</li>
                        <li>Pricing</li>        
                        </ul> 

            <div className='hidden md:flex font-bold pr-4'>
                         
                <button className='border-none bg-transparent text-black mr-4'> SIgn In</button>
                <button className='px-8 py-3'> SIgn Up</button>           
            </div> 

            </div>
        </div>


            <div  onClick={handleClick} className='lg:hidden md:hidden  hover:cursor-pointer bg-white '>

                {!nav?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>}

            </div>


        <ul  className={!nav?'hidden':'absolute bg-zinc-200  w-full px-8 sm:flex items-center  hover:cursor-pointer lg:hidden md:hidden'}>
            <li className='border-b-2 w-full bg-zinc-200'>Home</li>
            <li className='border-b-2 w-full bg-zinc-200'>About</li>
            <li className='border-b-2 w-full bg-zinc-200'>Support</li>
            <li className='border-b-2 w-full bg-zinc-200'>Platforms</li>
            <li className='border-b-2 w-full bg-zinc-200'>Pricing</li>        
            

            <div className='flex flex-col my-4'>
                <button className='bg-transparent bg-indigo-600 text-black px-8 py-3 mb-4'>Sign In</button>
                <button className='bg-transparent bg-indigo-600 text-black px-8 py-3 mb-4'>Sign Up</button>
            </div>

        </ul> 



</div>
  
  )
}

export default Navbar
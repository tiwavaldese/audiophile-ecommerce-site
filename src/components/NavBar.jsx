import React from 'react'
import shape from '../assets/Shape.png'

const NavBar = () => {
  return (
    <div className=' bg-[black]'>
       <nav className='p-12 mx-auto  flex justify-evenly text-[white]'>
        <div className='ml-12 font-bold'>audiophile</div>
        <div>
            <ul className='flex gap-6 ml-12'>
                <li>HOME</li>
                <li className='text-[orange]'>HEADPHONES</li>
                <li>SPEAKERS</li>
                <li>EARPHONES</li>
            </ul>
        </div>
        <div className='ml-12'>
            <img className='text-[black] ' src={shape} alt='shape' />
        </div>  
        <hr/>   
 </nav>
    </div>
  )
}

export default NavBar

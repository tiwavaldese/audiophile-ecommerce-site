import React from 'react'
import shape from '../assets/Shape.png'

const NavBar = () => {
  return (
    <div className=' bg-[black]'>
       <nav className='p-12  flex justify-evenly text-[white]'>
        <div>audiophile</div>
        <div>
            <ul className='flex gap-6'>
                <li>HOME</li>
                <li>HEADPHONES</li>
                <li>SPEAKERS</li>
                <li>EARPHONES</li>
            </ul>
        </div>
        <div>
            <img className='text-[black]' src={shape} alt='shape' />
        </div>  
        <hr/>   
 </nav>
    </div>
  )
}

export default NavBar

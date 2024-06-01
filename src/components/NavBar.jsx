import React from 'react'
import shape from '../assets/Shape.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className=' bg-[black]'>
       <nav className='p-12 mx-auto  flex justify-evenly text-[white]'>
        <div className='ml-12 font-bold'>audiophile</div>
        <div>
            <ul className='flex gap-6 ml-12'>
                <li><Link to='/'>HOME</Link></li>
                <li className='text-[orange]'><Link to='/headphones'>HEADPHONES</Link></li>
                <li><Link to='/speakers'>SPEAKERS</Link></li>
                <li><Link to='/earphones'>EARPHONES</Link></li>
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

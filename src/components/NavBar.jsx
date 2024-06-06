import React, {useState} from 'react'
import shape from '../assets/Shape.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const[menuOpen, setMenuOpen] = useState(false);

  const toggleMenu =()=>{
    setMenuOpen(!menuOpen)
  }

  return (
    <div className=' bg-[black]'>
       <nav className='p-12 mx-auto w-full flex sm:justify-center lg:justify-between md:justify-between text-[white]'>
        <button onClick={toggleMenu} className='text-white lg:hidden'>☰</button>
        <div className='ml-0  lg:ml-28 font-bold'>audiophile</div>
        <div className={`absolute top-16 left-0 lg:static  lg:w-auto  w-full lg:flex gap-6 ${menuOpen ? 'block' : 'hidden'} `} >
            <ul className='flex flex-col lg:flex-row gap-2 mt-3 lg:mt-0 lg:gap-6 ml-12 lg:ml-24'>
                <li><Link to='/'>HOME</Link></li>
                <li className='text-[orange]'><Link to='/headphones'>HEADPHONES</Link></li>
                <li><Link to='/speakers'>SPEAKERS</Link></li>
                <li><Link to='/earphones'>EARPHONES</Link></li>
            </ul>
        </div>
        <div className=' ml-40  md:ml-80 lg:ml-24'>
            <img className='' src={shape} alt='shape' />
        </div> 
        <hr/>   
 </nav>
    </div>
  )
}

export default NavBar

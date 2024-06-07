import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (

      <div className=' bg-[black]'>
       <nav className='p-12 mx-auto  flex flex-col md:flex-row lg:flex-row justify-evenly text-[white]'>
        <div className='ml-12 '>
            <h2 className=' font-bold'>audiophile</h2>
        <p className='my-5 text-white-50'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team <br/>of music lovers and sound specialists who are devoted to helping you get the <br/>most out of personal audio. Come and visit our demo facility - we’re open 7<br/> days a week.</p>
        <p className='text-white-50'>Copyright 2021. All Rights Reserved</p>
        </div>
        <div>
            <ul className='flex gap-6 ml-12'>
            <li><Link to='/'>HOME</Link></li>
                <li className='text-[orange]'><Link to='/headphones'>HEADPHONES</Link></li>
                <li><Link to='/speakers'>SPEAKERS</Link></li>
                <li><Link to='/earphones'>EARPHONES</Link></li>
            </ul>
            <div className='flex gap-3 justify-end mt-24'>
                <span className='bg-[orange] text-black p-1' ><FaFacebookF/></span>
                <FaTwitter />
                <FaInstagram/>
            </div>
        </div>
         
 </nav>
    </div>
  )
}

export default Footer

import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (

      <div className=' bg-[black]'>
       <nav className='p-12 mx-auto  flex flex-col  lg:flex-row justify-evenly text-[white]'>
        <div className='ml-0 items-center lg:ml-12 '>
            <div className='order-1'><h2 className=' font-bold order-1'>audiophile</h2></div>
        <div className='order-3'><p className='my-5 text-white-50 order-3'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p></div>
        <div className='order-4'><p className='text-white-50 order-4' >Copyright 2021. All Rights Reserved</p></div>
        </div>
        <div className='order-2'>
            <ul className='flex flex-col items-center md:flex-row lg:flex-row gap-6 ml-0 lg:ml-12'>
            <li><Link to='/'>HOME</Link></li>
                <li className='text-[orange]'><Link to='/headphones'>HEADPHONES</Link></li>
                <li><Link to='/speakers'>SPEAKERS</Link></li>
                <li><Link to='/earphones'>EARPHONES</Link></li>
            </ul>
            <div className='flex gap-3 justify-center lg:justify-end mt-24 order-5'>
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

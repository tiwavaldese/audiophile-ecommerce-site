import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (

    <div className='bg-[black]'>
    <nav className='p-12 mx-auto flex flex-col lg:flex-row justify-evenly text-[white]'>
       <div className='w-full'>
        <div className='flex flex-col md:flex-col lg:flex-row justify-center md:justify-between lg:justify-between '>
        <h2 className='font-bold flex justify-center  md:justify-start lg:justify-start lg:ml-12 mb-7 text-2xl lg:mb-0'>audiophile</h2>
        <ul className='flex flex-col justify-center items-center md:justify-start lg:justify-end md:flex-row lg:flex-row gap-6 '>
                <li><Link to='/'>HOME</Link></li>
                <li className='text-[orange]'><Link to='/headphones'>HEADPHONES</Link></li>
                <li><Link to='/speakers'>SPEAKERS</Link></li>
                <li><Link to='/earphones'>EARPHONES</Link></li>
            </ul>
        </div>
        <div className='  ml-0 items-center lg:items-start lg:ml-12 '>
            <div className='max-w-2xl lg:max-w-lg '>
                <p className='my-5 text-white-50 '>
                    Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
                </p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row lg:flex-row justify-center md:justify-between lg:justify-between ml-0 lg:ml-12 '>
            <div className='   mt-2  lg:mt-10'>
                <p className='text-white-50'>
                    Copyright 2021. All Rights Reserved
                </p>
            </div>
            <div className='flex gap-3 justify-center md:justify-end lg:justify-end  mt-24 md:mt-10 lg:mt-2'>
                <span className='bg-[orange] text-black p-1 h-21'><FaFacebookF /></span>
                <FaTwitter />
                <FaInstagram />
            </div>
            </div>
       </div>
           
    </nav>
</div>
  )
}

export default Footer

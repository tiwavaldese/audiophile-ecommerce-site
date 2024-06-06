import React from 'react'
import NavBar from './NavBar'
import hero1 from '../assets/Hero1.jpg'
import hero2 from '../assets/Hero2.jpg'
import hero3 from '../assets/Hero3.jpg'
import { Link } from 'react-router-dom'
import styles from '../styles.module.css'

const Header = () => {
  return (
    <div>
      <NavBar />
      <div className=' flex flex-col '>
    <div className='bg-cover bg-center bg-no-repeat h-500 hidden lg:flex flex-col' style={{ backgroundImage: `url(${hero1})` }}>
        <div className='text-white  pl-40 mt-32'>
            <span className='text-sm text-white-50 tracking-widest'>NEW PRODUCT</span>
            <h2 className='font-bold  text-5xl my-5'>XX99 Mark II <br /> HEADPHONES</h2>
            <p className='mb-5 text-white-75'>
                Experience natural, lifelike audio and exceptional <br />
                build quality made for the passionate music <br /> enthusiast.
            </p>
            <Link to='/headphones1'><button className='bg-orange-bg p-3 text-xs'>SEE PRODUCT</button></Link>
        </div>
    </div>
    <div className='bg-cover bg-center bg-no-repeat hidden flex-col h-500 md:flex sm:hidden lg:hidden' style={{ backgroundImage: `url(${hero2})` }}>
        <div className='text-white flex-col flex items-center justify-center mt-24'>
            <span className='text-sm text-white-50 tracking-widest'>NEW PRODUCT</span>
            <h2 className='font-bold text-5xl my-5'>XX99 Mark II <br /> HEADPHONES</h2>
            <p className='mb-5 text-white-75'>
                Experience natural, lifelike audio and exceptional <br />
                build quality made for the passionate music <br /> enthusiast.
            </p>
            <Link to='/headphones1'><button className='bg-orange-bg p-3 text-xs'>SEE PRODUCT</button></Link>
        </div>
    </div>
    <div className='bg-cover flex-col pt-12 flex bg-center bg-no-repeat md:hidden lg:hidden' style={{ backgroundImage: `url(${hero3})` }}>
        <div className='text-white items-center flex flex-col mt-24'>
            <span className='text-sm text-white-50 tracking-widest'>NEW PRODUCT</span>
            <h2 className='font-bold text-5xl my-5'>XX99 Mark II <br /> HEADPHONES</h2>
            <p className='mb-5 text-white-75'>
                Experience natural, lifelike audio and exceptional <br />
                build quality made for the passionate music <br /> enthusiast.
            </p>
            <Link to='/headphones1'><button className='bg-orange-bg p-3 text-xs'>SEE PRODUCT</button></Link>
        </div>
    </div>
</div>

    </div>
  )
}

export default Header

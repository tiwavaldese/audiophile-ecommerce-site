import React from 'react'
import NavBar from './NavBar'
import bitmap from '../assets/Bitmap.png'

const Header = () => {
  return (
    <div>
      <NavBar />
      <div className='flex p-4 bg-[black]  justify-evenly h-custom-750 '>
        <div className='text-[white]  '>
            <span className='text-sm text-white-50 tracking-widest' >NEW PRODUCT</span>
            <h2 className='font-bold text-5xl my-5 '>XX99 Mark II <br/> HEADPHONES</h2>
            <p className='mb-5 text-white-75'>Experience natural, lifelike audio and exceptional <br/> build quality made for the passionate music <br/> enthusiast.</p>
            <button className='bg-orange-bg p-3 text-xs '>SEE PRODUCT</button>
        </div>
        <div className='w-500'>
            <img className=' border-0' src={bitmap} alt='headphone' />
        </div>
      </div>
    </div>
  )
}

export default Header

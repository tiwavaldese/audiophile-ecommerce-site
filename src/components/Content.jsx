import React from 'react'
import headphone from '../assets/Headphone.png'
import speaker from '../assets/Speaker.png';
import earphone from '../assets/Earphone.png';
import bitmap1 from '../assets/Bitmap-1.png'
import bitmap2 from '../assets/Bitmap-2.png'
import bitmap3 from '../assets/Bitmap-3.png'
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Content() {
  return (
    <div>
     <div className='flex justify-evenly my-24 max-w-5xl mx-auto  '>
      <div className='relative bg-light-gray h-40 w-64 mt-12 '>
        <img className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={headphone}/>
      <div className='text-center mt-12 pt-11'>
        <h2 className='font-bold'>HEADPHONES</h2>
        <Link to='/headphones'><div className=' gap-1 flex justify-center mt-1'>
          <span className='text-xs'>SHOP</span> 
          <FaChevronRight className='text-[orange] mt-1'size={12}/> 
         </div>
         </Link>
      </div>
      </div>
      <div className='relative bg-light-gray h-40  w-64 mt-12'>
      <img className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={speaker} />
      <div className='text-center mt-12 pt-11'>
      <h2 className='font-bold'>SPEAKERS</h2>
      <Link to='/speakers'><div className=' gap-1 flex justify-center mt-1'>
          <span className='text-xs'>SHOP</span> 
          <FaChevronRight className='text-[orange] mt-1'size={12}/> 
         </div>
         </Link>
      </div>
      </div>
      <div className='relative bg-light-gray h-40 w-64 mt-12'>
      <img className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={earphone} />
      <div className='text-center mt-12 pt-11'>
      <h2 className='font-bold'>EARPHONES</h2>
      <Link to='/earphones'><div className=' gap-1 flex justify-center mt-1'>
          <span className='text-xs'>SHOP</span> 
          <FaChevronRight className='text-[orange] mt-1'size={12}/> 
         </div>
         </Link>
      </div>
      </div>
     </div>
     <div className='flex justify-evenly bg-oranger-bg mx-auto max-w-4xl h-400'>
     <div className=' w-600 h-400 '>
        <img className='mt-28 mb-0 h-300' src={speaker} alt='speaker' />
      </div>
      <div className='mt-32'>
        <h2 className='text-c-white  text-3xl font-bold'>ZX9 <br/> SPEAKER</h2>
        <p className='text-c-white my-5'>Upgrade to premium speakers that are <br/> phenomenally built to deliver truly remarkable <br/> sound.</p>
        <Link to='/speakers1'><button className='bg-m-dark p-3 w-50 h-9 my-auto text-xs text-c-white mb-10'>SEE PRODUCT</button></Link>
      </div>
     </div>
     <div className='flex mx-auto max-w-4xl my-12 relative'>
      <div className='absolute  top-24 left-2 pl-80 transform -translate-x-1/2 -translate-y-1/2'>
        <h2 className='font-bold text-2xl mb-3'>ZX7 SPEAKER</h2>
        <Link to='/speakers2'><button className='bg-m-dark p-3 w-50 h-9 my-auto text-xs text-c-white'>SEE PRODUCT</button></Link>
      </div>
      <div>
        <img src={bitmap1} />
      </div>
     </div>
     <div className='flex mx-auto max-w-4xl my-12 gap-4'>
      <div className='flex-1'>
        <img src={bitmap2} />
      </div>
      <div className='flex-1 flex flex-col justify-center items-center  bg-light-gray'>
        <h2 className='font-bold text-2xl mb-5 '>YX1 EARPHONES</h2>
        <Link to='/earphones1'><button className='bg-m-dark p-3 w-15 h-9  text-xs text-c-white'>SEE PRODUCT</button></Link>
      </div>
     </div>
     <div className='flex mx-auto max-w-4xl my-24 '>
      <div className='flex-1 mt-24'>
        <h2 className='text-4xl mb-5'>BRINING YOU THE<br/> <span className='text-[orange]'>BEST</span> AUDIO GEAR</h2>
        <p className='text-xs leading-relaxed'>Located at the heart of New York City, Audiophile is the premier <br/> store for high end headphones, earphones, speakers, and audio <br/> accessories. We have a large showroom and luxury <br/> demonstration rooms available for you to browse and<br/> experience a wide range of our products. Stop by our store to<br/> meet some of the fantastic people who make Audiophile the <br/>best place to buy your portable audio equipment.</p>
      </div>
      <div className='flex-1'>
        <img src={bitmap3} />
      </div>
     </div>
    </div>
  )
}

export default Content

import React from 'react'
import NavBar from './NavBar'
import headphone from '../assets/Headphone.png'
import speaker from '../assets/Speaker.png';
import earphone from '../assets/Earphone.png';
import bitmap4 from '../assets/Bitmap-4.png'
import mask from '../assets/Mask.png'
import bitmap3 from '../assets/Bitmap-3.png'
import { FaChevronRight } from 'react-icons/fa';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Headphones = () => {
  return (
    <div>
      <NavBar/>
      <div className='flex p-4 bg-[black]  justify-center h-custom-750 '>
        <h2 className='text-white text-3xl font-bold mb-9'>HEADPHONES</h2>
      </div>
      <div className='flex max-w-4xl justify-evenly mx-auto my-24'>
        <div className='flex-1'>
          <img src={bitmap4}/>
        </div>
        <div className='flex-1 ml-24 mt-12'>
            <span className='text-sm text-[orange] tracking-widest' >NEW PRODUCT</span>
            <h2 className='font-bold text-5xl my-5 '>XX99 Mark II <br/> HEADPHONES</h2>
            <p className='mb-5  '>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
            <Link to='/headphones1'><button className='bg-orange-bg p-3 text-xs text-white '>SEE PRODUCT</button></Link>
        </div>
      </div >
      <div className='flex max-w-4xl justify-evenly mx-auto my-24'>
      <div className='flex-1 mt-12'>
            <h2 className='font-bold text-5xl my-5 '>XX99 Mark I <br/> HEADPHONES</h2>
            <p className='mb-5  '>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
            <Link to='/headphones2'><button className='bg-orange-bg p-3 text-xs text-white '>SEE PRODUCT</button></Link>
        </div>
        <div className='flex-1'>
          <img src={mask}/>
        </div>
      </div>
      <div className='flex max-w-4xl justify-evenly mx-auto my-24'>
        <div className='flex-1 '>
          <img src={bitmap4}/>
        </div>
        <div className='flex-1 ml-24 mt-12'>
            <h2 className='font-bold text-5xl my-5 '>XX59 <br/> HEADPHONES</h2>
            <p className='mb-5  '>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
            <button className='bg-orange-bg p-3 text-xs text-white '>SEE PRODUCT</button>
        </div>
      </div>
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
      <div className='relative bg-light-gray h-40 w-64 mt-12'>
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
     <div className='flex mx-auto max-w-4xl my-24 '>
      <div className='flex-1 mt-24'>
        <h2 className='text-4xl mb-5'>BRINING YOU THE<br/> <span className='text-[orange]'>BEST</span> AUDIO GEAR</h2>
        <p className='text-xs leading-relaxed'>Located at the heart of New York City, Audiophile is the premier<br/> store for high end headphones, earphones, speakers, and audio<br/> accessories. We have a large showroom and luxury<br/> demonstration rooms available for you to browse and <br/>experience a wide range of our products. Stop by our store to<br/> meet some of the fantastic people who make Audiophile the<br/> best place to buy your portable audio equipment.</p>
      </div>
      <div className='flex-1'>
        <img src={bitmap3} />
      </div>
     </div>
     <Footer/>
    </div>
  )
}

export default Headphones

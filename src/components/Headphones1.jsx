import React from 'react'
import NavBar from './NavBar'
import headphone from '../assets/Headphone.png'
import speaker from '../assets/Speaker.png';
import earphone from '../assets/Earphone.png';
import bitmap3 from '../assets/Bitmap-3.png'
import bitmap4 from '../assets/Bitmap-4.png'
import bitmap5 from '../assets/Bitmap-5.png'
import bitmap6 from '../assets/Bitmap-6.png'
import Footer from './Footer';
import mask from '../assets/Mask.png'
import mask2 from '../assets/Mask2.png'
import speaker2 from '../assets/Speaker2.png';
import { FaChevronRight } from 'react-icons/fa';

const Headphones1 = () => {
  return (
    <div>
      <NavBar/>
      <div className='flex max-w-4xl justify-evenly mx-auto my-24'>
        <div className='flex-1'>
            <button className='mb-12'>Go Back</button>
          <img src={bitmap4}/>
        </div>
        <div className='flex-1 ml-24 mt-12'>
            <span className='text-sm text-[orange] tracking-widest' >NEW PRODUCT</span>
            <h2 className='font-bold text-5xl my-5 '>XX99 Mark II <br/> HEADPHONES</h2>
            <p className='mb-5  '>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
            <span className='font-bold '>$2.999</span>
            <div className='flex gap-6 mt-5'>
            <button className='bg-light-bg p-3 text-xs text-black h-9 w-100 '>1</button>
            <button className='bg-orange-bg p-3 h-9 w-34 text-xs text-white items-center'>ADD TO CART</button>
        </div>
        </div>
      </div >
      <div className='flex max-w-4xl justify-evenly mx-auto my-24'>
        <div className='w-200'>
            <h2 className='font-bold text-2xl'>FEATURES</h2>
            <p className='my-5 text-sm'>Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.</p>
           
            <p>The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.</p>
        </div>
        <div className=' ml-24'>
            <h2 className='font-bold text-2xl'>IN THE BOX</h2>
            <p className='mt-5'>
                <span className='text-[orange]'>1x</span>
               <span className='ml-6'>Headphone Unit</span>
            </p>
            <p>
                <span className='text-[orange]'>2x</span>
                <span className='ml-6'>Replacement Earcups</span>
            </p>
            <p>
                <span className='text-[orange]'>1x</span>
                <span className='ml-6'>User Manual</span>
            </p>
            <p>
                <span className='text-[orange]'>1x</span>
                <span className='ml-6'>3.5mm 5m Audio Cable</span>
            </p>
            <p>
                <span className='text-[orange]'>1x</span>
                <span className='ml-6'>Travel Bag</span>
            </p>
        </div>
      </div>
      <div className='flex max-w-4xl justify-evenly mx-auto my-24 gap-5'>
        <div className=' flex flex-col gap-5'>
            <img className='h-48' src={bitmap3}/>
            <img src={bitmap5}/>
        </div>
        <div>
            <img src={bitmap6}/>
        </div>
      </div>
      <div className='flex justify-evenly my-24 max-w-4xl mx-auto gap-5'>
        <div>
            <img src={mask}/>
            <div className='text-center'>
            <h2 className='font-bold my-5'>XX99 MASK I</h2>
            <button className='bg-orange-bg p-3 text-xs text-white '>SEE PRODUCT</button>
            </div>
        </div>
        <div>
            <img src={mask2}/>
            <div className='text-center'>
            <h2 className='font-bold my-5'>XX59 </h2>
            <button className='bg-orange-bg p-3 text-xs text-white '>SEE PRODUCT</button>
            </div>
            </div>
        <div>
            <img src={speaker2}/>
            <div className='text-center'>
            <h2 className='font-bold my-5'>ZX9 MASK SPEAKER</h2>
            <button className='bg-orange-bg p-3 text-xs text-white '>SEE PRODUCT</button>
            </div>
            </div>
      </div>
      <div className='flex justify-evenly my-24 max-w-5xl mx-auto  '>
      <div className='relative bg-light-gray h-40 w-64 mt-12 '>
        <img className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={headphone}/>
      <div className='text-center mt-12 pt-11'>
        <h2 className='font-bold'>HEADPHONES</h2>
        <div className=' gap-1 flex justify-center mt-1'>
          <span className='text-xs'>SHOP</span> 
          <FaChevronRight className='text-[orange] mt-1'size={12}/> 
         </div>
      </div>
      </div>
      <div className='relative bg-light-gray h-40 w-64 mt-12'>
      <img className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={speaker} />
      <div className='text-center mt-12 pt-11'>
      <h2 className='font-bold'>SPEAKERS</h2>
      <div className=' gap-1 flex justify-center mt-1'>
          <span className='text-xs'>SHOP</span> 
          <FaChevronRight className='text-[orange] mt-1'size={12}/> 
         </div>
      </div>
      </div>
      <div className='relative bg-light-gray h-40 w-64 mt-12'>
      <img className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={earphone} />
      <div className='text-center mt-12 pt-11'>
      <h2 className='font-bold'>EARPHONES</h2>
      <div className=' gap-1 flex justify-center mt-1'>
          <span className='text-xs'>SHOP</span> 
          <FaChevronRight className='text-[orange] mt-1'size={12}/> 
         </div>
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

export default Headphones1

import React from 'react'
import NavBar from './NavBar'
import headphone from '../assets/Headphone.png'
import speaker from '../assets/Speaker.png';
import earphone from '../assets/Earphone.png';
import bitmap3 from '../assets/Bitmap-3.png'
import Footer from './Footer';
import mask from '../assets/Mask.png'
import mask2 from '../assets/Mask2.png'
import speaker2 from '../assets/Speaker2.png';
import speaker3 from '../assets/Speaker3.png';
import speaker4 from '../assets/Speaker4.png';
import speaker5 from '../assets/Speaker5.png';
import speaker6 from '../assets/Speaker6.png';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Speakers1 = () => {
  return (
    <div>
      <NavBar/>
      <div className='flex max-w-4xl justify-evenly mx-auto my-24'>
        <div className='flex-1'>
            <button className='mb-12'>Go Back</button>
          <img src={speaker2}/>
        </div>
        <div className='flex-1 ml-24 mt-12'>
            <span className='text-sm text-[orange] tracking-widest' >NEW PRODUCT</span>
            <h2 className='font-bold text-5xl my-5 '>ZX9 <br/> SPEAKER</h2>
            <p className='mb-5 '>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
            <span className='font-bold '>$4,500</span>
            <div className='flex gap-4 mt-5'>
            <button className='bg-light-bg p-3 text-xs text-black h-10 w-110 '>-<span className='font-bold px-6'>1</span>+</button>
            <button className='bg-orange-bg p-3 h-10 w-130 text-xs text-white items-center'>ADD TO CART</button>
        </div>
        </div>
      </div >
      <div className='flex max-w-4xl justify-evenly mx-auto my-24'>
        <div className='w-550'>
            <h2 className='font-bold text-2xl'>FEATURES</h2>
            <p className='my-5 text-sm'>Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).</p>
           
            <p>Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.</p>
        </div>
        <div className='flex-1 ml-24'>
            <h2 className='font-bold text-2xl'>IN THE BOX</h2>
            <p className='mt-5'>
                <span className='text-[orange]'>2x</span>
               <span className='ml-6'>Speaker Unit</span>
            </p>
            <p>
                <span className='text-[orange]'>2x</span>
                <span className='ml-6'>Speaker Cloth Panel</span>
            </p>
            <p>
                <span className='text-[orange]'>1x</span>
                <span className='ml-6'>User Manual</span>
            </p>
            <p>
                <span className='text-[orange]'>1x</span>
                <span className='ml-6'>3.5mm 10m Audio Cable</span>
            </p>
            <p>
                <span className='text-[orange]'>1x</span>
                <span className='ml-6'>10m Optical Cable</span>
            </p>
        </div>
      </div>
      <div className='flex max-w-4xl justify-evenly mx-auto my-24 gap-5'>
        <div className=' flex flex-col gap-5'>
            <img className='h-230' src={speaker4}/>
            <img src={speaker5}/>
        </div>
        <div>
            <img src={speaker6}/>
        </div>
      </div>
      <div className='text-center font-bold text-2xl'>
        <h2>YOU MAY ALSO LIKE</h2>
        </div>
      <div className='flex justify-evenly mt-10 mb-24 max-w-4xl mx-auto gap-5'>
        
        <div>
            <img src={speaker3}/>
            <div className='text-center'>
            <h2 className='font-bold my-5'>ZX7 SPEAKER</h2>
            <Link to='/speakers2'><button className='bg-orange-bg p-3 text-xs text-white '>SEE PRODUCT</button></Link>
            </div>
        </div>
        <div>
            <img src={mask}/>
            <div className='text-center'>
            <h2 className='font-bold my-5'>XX99 MASK I </h2>
            <Link to='/headphones2'><button className='bg-orange-bg p-3 text-xs text-white '>SEE PRODUCT</button></Link>
            </div>
            </div>
        <div>
            <img src={mask2}/>
            <div className='text-center'>
            <h2 className='font-bold my-5'>XX59</h2>
            <Link to='/headphones3'><button className='bg-orange-bg p-3 text-xs text-white '>SEE PRODUCT</button></Link>
            </div>
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

export default Speakers1

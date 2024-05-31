import React from 'react'
import Header from './Header';
import headphone from '../assets/Headphone.png'
import speaker from '../assets/Speaker.png';
import earphone from '../assets/Earphone.png';

const Home = () => {
  return (
    <div>
     < Header />
     <div className='flex justify-center my-24  gap-4'>
      <div className='relative bg-light-bg h-40 w-64 mt-12 '>
        <img className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={headphone}/>
      <div className='text-center mt-12 pt-11'>
        <h2>HEADPHONES</h2>
        <p>SHOP <span></span> </p>
      </div>
      </div>
      <div className='relative bg-light-bg h-40 w-64 mt-12'>
      <img className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={speaker} />
      <div className='text-center mt-12 pt-11'>
      <h2>SPEAKERS</h2>
      <p>SHOP <span></span> </p>
      </div>
      </div>
      <div className='relative bg-light-bg h-40 w-64 mt-12'>
      <img className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={earphone} />
      <div className='text-center mt-12 pt-11'>
      <h2>EARPHONES</h2>
      <p>SHOP <span></span> </p>
      </div>
      </div>
     </div>
     <div className='flex justify-evenly bg-oranger-bg '>
      <div>
        <img className='w-500 h-500' src={speaker} />
      </div>
      <div>
        <h2>ZX9 <br/> SPEAKER</h2>
        <p>Upgrade to premium speakers that are <br/> phenomenally built to deliver truly remarkable <br/> sound.</p>
        <button className='bg-m-dark p-3 text-xs text-c-white'>SEE PRODUCT</button>
      </div>
     </div>
    </div>
  )
}

export default Home

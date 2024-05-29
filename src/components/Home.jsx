import React from 'react'
import Shape from '../assets/Shape.png'

const Home = () => {
  return (
    <div>
      <nav>
        <div>audiophile</div>
        <div>
            <ul>
                <li>HOME</li>
                <li>HEADPHONES</li>
                <li>SPEAKERS</li>
                <li>EARPHONES</li>
            </ul>
        </div>
        <div>
          <img src={Shape}  alt="Shape" />  
        </div>     
 </nav>
    </div>
  )
}

export default Home

import React from 'react'
import './Hero_but.scss'
import low from '../../../assets/img/low_hero.svg'
function Hero_but() {
  return (
    <div className='herobut'>
      <div className='container  '>
          <div className=' just d-flex align-items-center justify-content-between  '>
        <div>
        <h1>Lorem ipsum dolor sit amet consectetur </h1>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
            <button>Learn More</button>
        </div>
        <img src={low} alt="" />
    </div> 
      </div>
      
    </div>
  )
}

export default Hero_but
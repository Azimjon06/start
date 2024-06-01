import React from 'react'
import micro from '../../../assets/img/microsoft.svg'
import google from '../../../assets/img/google.svg'
import airbnb from '../../../assets/img/airbnb.svg'
import face from '../../../assets/img/header.svg'
import spot from '../../../assets/img/spotifyy.svg'
import './Partners.scss'




function Partners() {
  return (
    <div className='partners text-center'> 
        <h3>P A R T N E R S</h3>
        <h1>Lorem Ipsum Dolor</h1>
        <p>Lorem ipsum, dolor sit amet consectetur <br />
         adipisicing elit.</p>
         <div className='d-flex align-items-center justify-content-around img'>
        <img src={google} alt="" />
          <img src={micro} alt="" />
          <img src={airbnb} alt="" />
          <img src={face} alt="" />
          <img src={spot} alt="" />
         </div>
         <button>Learn More</button>
    </div>
  )
}

export default Partners
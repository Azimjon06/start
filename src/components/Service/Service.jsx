import React from 'react'
import './Service.scss'
import vector from '../../assets/img/Vector.png'
function Service() {
    return (
        <div className='service'>
            <div className="container">
                <div className='service__inner' >
                    <h3>P L A N S</h3>
                    <h1>Our Services</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur <br />
                        adipisicing elit.</p>
                </div>
                <div className='prices d-flex justify-content-between align-items-center '>
                    <div className="price">
                        <h3>Basic</h3>
                        <h1>$100 <span className='sp'>/month</span></h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam</p>
                        <h4><img src={vector} alt="" />Lorem ipsum, dolor sit </h4>
                        <h4><img src={vector} alt="" />Lorem ipsum, dolor sit </h4>
                        <h4><img src={vector} alt="" />Lorem ipsum, dolor sit </h4>
                        <h4><img src={vector} alt="" />Lorem ipsum, dolor sit </h4>
                        <h4><img src={vector} alt="" />Lorem ipsum, dolor sit </h4>
                        <button>Learn More</button>
                    </div>
                    <div className="price">
                        <h3>Plus</h3>
                        <h1>$250 <span>/moth</span></h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam</p>
                        <h4><img src={vector} alt="" />Lorem ipsum, dolor sit </h4>
                        <h4><img src={vector} alt="" />Lorem ipsum, dolor sit </h4>
                        <h4><img src={vector} alt="" />Lorem ipsum, dolor sit </h4>
                        <h4><img src={vector} alt="" />Lorem ipsum, dolor sit </h4>
                        <h4><img src={vector} alt="" />Lorem ipsum, dolor sit </h4>
                        <button>Learn More</button>
                    </div>
                    <div className="price">
                        <h3>Pro</h3>
                        <h1>$400 <span>/moth</span></h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam</p>
                        <h4><img src={vector} alt="" />Lorem ipsum, dolor sit </h4>
                        <h4><img src={vector} alt="" />Lorem ipsum, dolor sit </h4>
                        <h4><img src={vector} alt="" />Lorem ipsum, dolor sit </h4>
                        <h4><img src={vector} alt="" />Lorem ipsum, dolor sit </h4>
                        <h4><img src={vector} alt="" />Lorem ipsum, dolor sit </h4>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
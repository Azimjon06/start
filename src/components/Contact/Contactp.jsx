import React from 'react'
import './Contactp.scss'
function Contactp() {
    return (
        <div className='contact'>
            <div className="container">
                <h1>Contact Us</h1>
                <p>Lorem ipsum, dolor sit amet consectetur <br />
                    adipisicing elit.</p>
                <div className=' inner d-flex justify-content-between align-items-center'>
                    <div className='inputs'>
                        <p>Name</p> <br />
                        <input type="text" />
                        <p>Email </p> <br />
                        <input type="text" /> <br />
                        <p>Massage</p>
                        <input className='last' type="text" /> <br />
                        <button>Submit</button>
                 
                    </div>
                    <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1534422.7184459916!2d69.2518912!3d41.3106176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1717243695178!5m2!1sru!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                </div>


            </div>


        </div>
    )
}

export default Contactp
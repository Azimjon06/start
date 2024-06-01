import React from 'react'
import "./Header.scss"
import logo from '../../assets/img/logo.svg'
import { Link } from 'react-router-dom'
function HEader() {
    return (
        <div className='header '>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid ">
                    <Link className="navbar-brand " href="#"><img src={logo} alt="" /> Star</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <div className='d-flex justify-content-end w-100'>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/'} aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/portfolio'} className="nav-link" href="#">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/services'} className="nav-link" href="#">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/contact'} className="nav-link " href='#'>Contact</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default HEader
import React from 'react'
// import PropTypes from 'prop-types'

import logo from '../Image/stackshare.png';
import img from '../Image/stackshare.png';
import { Link } from 'react-router-dom';

export default function header(props) {
    return (
        <>
        <div className='bg-dark text-lg-start'>
        <div className='container'>
            <div className=''>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                    <Link className="navbar-brand" to="/"><img src={logo} style={{width: "200px"}} /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link text-light fs-5 pt-3" to="/feature">features </Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link text-light fs-5 pt-3" to="/pricing">pricing </Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link text-light fs-5 pt-3" to="/contact">Contact Us </Link>
                            </li>
                        </ul>
                        {/* <button className='btn text-light bg-success px-4' ><a href="/login" className='text-decoration-none text-light ' >Log in</a></button> */}
                        {/* <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        </form> */}
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><a href="/login" className='text-decoration-none text-light ' >Log in</a></button>
                    </div>
                </nav>
            </div>
        </div>
        </div>

        </>
    )
}

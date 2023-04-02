import React from 'react'
// import PropTypes from 'prop-types'

import logo from '../Image/Workolia.png';
import img from '../Image/backlog2.png';



export default function header(props) {
    return (
        <>
        <div className='bg-dark text-lg-start'>
        <div className='container'>
            <div className=''>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                    <a className="navbar-brand" href="/"><img src={logo} style={{width: "200px"}} /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link text-light fs-5 pt-3" href="/feature">features </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link text-light fs-5 pt-3" href="/pricing">pricing </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link text-light fs-5 pt-3" href="/contact">Contact Us </a>
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
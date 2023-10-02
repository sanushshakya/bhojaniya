import React from 'react'
import './Congrats.scss'
import { Link } from 'react-router-dom'
const Congrats = () => {
  return (
    <div className='congrats'>
        <div className="container">
            <div className="top">
                <img src='banner.png' />
            </div>
            <div className="bottom">
                <h1>Submitted</h1>
                <span>Thank You For Your Support</span>
                <Link to='/' className='link'><button>Back to home ---{'>'}</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Congrats

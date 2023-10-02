import React from 'react'
import './Gallery.scss'

const Gallery = ({item}) => {
  return (
    <div className='gallery'>
        <div className="container">
            <img src={item.image} alt=""/>
        </div>
    </div>
  )
}

export default Gallery

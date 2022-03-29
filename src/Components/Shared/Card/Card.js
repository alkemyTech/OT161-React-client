import React from 'react'
import './card.css'
import PropTypes from 'prop-types';
const Card = ({image = null, title, description}) => {
  return (
    <section className='cardBody'>
    {image?
   <image className='cardImage' src={image} alt={title}></image>
   : <div className='cardImage-noImage' ><p>{title}</p></div>
  }
  <h1 className='cardTitle'>{title}</h1>

   <p className='cardDescription'>{description}</p>
    </section>
  )
}

export default Card

Card.propTypes = {   
        image: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        
    }
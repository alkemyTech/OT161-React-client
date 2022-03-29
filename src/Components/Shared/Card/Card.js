import React from 'react'
import './card.css'
import PropTypes from 'prop-types';
import parser from "html-react-parser";
const Card = ({image = null, title, description}) => {
  return (
    <section className='cardBody'>
    {image?
   <image className='cardImage' src={image} alt={parser(title)}></image>
   : <div className='cardImage-noImage' ><p>{parser(title)}</p></div>
  }
  <h1 className='cardTitle'>{parser(title)}</h1>

   <p className='cardDescription'>{parser(description)}</p>
    </section>
  )
}

export default Card

Card.propTypes = {   
        image: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        
    }

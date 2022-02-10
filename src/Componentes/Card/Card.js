import React from 'react';
import './Card.css'

function Card({name,image,species}){
    return(
        <div className='cont_card' >
            <img 
            src={image}
            alt={name}
          />
          <h2>Name:{name}</h2>
          <p>Species:{species}</p>
           
        </div>
    )
}

export default Card
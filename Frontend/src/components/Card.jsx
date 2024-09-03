import React from 'react';
import "./style/Cards.css";

const Card = (props) => {
  return (
    <div className='card-container'>
        <img src={props.icon} alt="" width="43px"/>
        <h2 className='card-hTwo'>{props.title}</h2>
        <p className='card-para'>{props.description}</p>
    </div>
  )
}

export default Card
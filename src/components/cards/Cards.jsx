import React from 'react'
import { LightBGButton } from '../light_bg_button/LightBGButton'
import "./cards.css"

export const Cards = ({img, title, price}) => {
  return (
    <div className='cards'>
        <img src={img} alt="description" />
        <div className='info'>
          <div className='h3'>
            <h3>{title}</h3>
          </div>
          <div className='cards_price_button'>
            <p>{price}{price !== "Free" && " $" }</p>
            <LightBGButton text="Buy" nameClass="red_bg"/>
          </div>
        </div>
    </div>
  )
}

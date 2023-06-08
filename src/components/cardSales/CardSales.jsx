import React from 'react'
import { LightBGButton } from '../light_bg_button/LightBGButton'
import "./cardSales.css"

export const CardSales = ({img, title, price, sale}) => {

  const descuento = price * (sale / 100);
  const discount = (price - descuento).toFixed(2);

  return (
      <div className='cards_sales'>
          <div className='circle'> {sale} %</div>
          <img src={img} alt="description" />
          <div className='info'>
          <div className='h3'>
              <h3>{title}</h3>
          </div>
          <div className='cards_price_button'>
            <div className='prices'>
              <p style={{ textDecoration: 'line-through' }}>{price}{price !== "Free" && " $" }</p>
              <p style={{ fontWeight: '400'}}>{discount} $</p>
            </div>
              <LightBGButton text="Buy" nameClass="red_bg"/>
          </div>
          </div>
      </div>

  )
}

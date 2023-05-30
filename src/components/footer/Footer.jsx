import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'
import "./footer.css"

export const Footer = () => {
  return (
    <div className='footer'>
        <p>2023 Nintenshop made by Lucas de Andres</p>
        <div className='icons'>
          <BsFacebook/>
          <BsInstagram/>
          <BsTwitter/>
          <BsYoutube/>
        </div>
    </div>
  )
}

import React from 'react'
import logo from "../../assets/logos/nintenshop_logo.png"
import { LightBGButton } from '../light_bg_button/LightBGButton'
import { MenuNavbar } from '../menuNavbar/MenuNavbar'
import { GiHamburgerMenu } from 'react-icons/gi'
import "./header.css"

export const Header = () => {

  return (
    <div className='header'>
        <div className='header_logo_menu'>
          <img src={logo} alt="the nintendo logo with a shop sprayed in top of it" />
          <MenuNavbar/>
        </div>
        <div className='header_buttons'>
          <LightBGButton text="Log In" nameClass="light_bg"/>
          <LightBGButton text="Sign Up" nameClass="light_bg"/>
          <GiHamburgerMenu className='burger_menu'/>
        </div>
    </div>
  )
}

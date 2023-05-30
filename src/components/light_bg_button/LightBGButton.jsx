import React from 'react'
import "./lightBGButton.css"

export const LightBGButton = ({text , nameClass}) => {
  return (
    <button className={nameClass}>
        {text}
    </button>
  )
}

import React from 'react'
import s from './Button.module.css'

const Button = ({ text, onClick }) => {
  return (
    <button className={s.primaryButton} onClick={onClick}>{text}</button>
  )
}

export default Button
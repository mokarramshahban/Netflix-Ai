import React from 'react'
import LOGO from '../assets/images/logo.png'
const Header = () => {
  return (
    <div className='absolute z-9 w-full bg-linear-330 from-black'>
      <img className='w-35 mx-10' src={LOGO} alt="" />
    </div>
  )
}

export default Header
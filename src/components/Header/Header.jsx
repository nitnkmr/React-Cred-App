import React from 'react'
import './Header.css'

export const Header = () => {
  return (
    <div className='navbar'>
        <div className="logo">
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png"
          className="header-logo"
        />

        </div>
        <div className="navcontent">
            <h3>credit score check</h3>
            <h3>CRED pay</h3>


        </div>
    </div>
  )
}

import React from 'react'
import './Feelspecial.css'
import { Button } from '../Button'


export const Feelspecial = () => {
  return (
    <div className='feelcontainer'>
        <div className="headingcontent">
              <h1>feel special more often.</h1>
            
              <h2>exclusive rewards for paying your bills</h2>
             <p>every time you pay your credit card bills on CRED, you receive
              CRED coins. you can use these to win exclusive rewards or get
              special access to curated products and experiences. on CRED, good
              begets good.</p> 
            <div className="photo-section-button">
             <Button buttonText="Explore rewards" /> 
            </div>
          </div>
        </div>

  )
}

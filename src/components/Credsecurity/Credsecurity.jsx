import React from 'react'
import { Button } from '../Button'
import './Credsecurity.css'


export const Credsecurity = () => {
  return (
    <div className="cred-security photo-section">
    <div className="securitycon">
              <h1>feel special more often.</h1>
            
              <h2>exclusive rewards for paying your bills</h2>
             <p>every time you pay your credit card bills on CRED, you receive
              CRED coins. you can use these to win exclusive rewards or get
              special access to curated products and experiences. on CRED, good
              begets good.</p> 
            <div className="photo-section-button">
             <Button buttonText="Become a member" /> 
            </div>
          </div>
  </div>
  )
}

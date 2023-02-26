import React from 'react'
import { Button } from '../Button'
import './CredExperience.css'

export const CredExperience = () => {
  return (
    <div className='experiencecontainer'>
    <div className="expcont">
          <h1> we take your money matters seriously.</h1>
        
          <h2>so that you don’t have to.</h2>
         <p> never miss a due date with reminders to help you pay your bills on
              time, instant settlements mean you never wait for your payments to
              go through and statement analysis lets you know where your money
              goes, always.</p> 
        <div className="photo-section-button">
         <Button buttonText="Experience the upgrade" /> 
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import { Button } from '../Button';
import './Rating.css'
 
export const Rating = () => {
    const getIosPrefix = () => {
        return (
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png"
            className="app-rating-icon"
          />
        );
      };
      
      const getAndroidPrefix = () => {
        return (
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/play-store-logo.png"
            className="app-rating-icon"
          />
        );
      };
  return (
    <div className="app-rating ">
    <div className="app-rating-block ">
        <div className="app-rating-value">
        <h1>4.8</h1>
          <p>app <br /> store</p>
        </div>
        <div className="app-rating-platform">
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png"
            className="app-rating-stars"
          />
        </div>
   
      <div className="non-mobile">
        <Button
          prefix={getIosPrefix()}
          buttonText="Download the app"
          customClass="app-rating-button"
        />
      </div>
    </div>
    <div className="app-rating-block ">
        <div className="app-rating-value">
        <h1>4.7</h1>
          <p>play <br /> store</p>
        </div>
        <div className="app-rating-platform">
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png"
            className="app-rating-stars"
          />
        </div>
   
      <div className="non-mobile">
        <Button
          prefix={getAndroidPrefix()}
          buttonText="Download the app"
          customClass="app-rating-button"
        />
      </div>
    </div>
  </div>
  )
}

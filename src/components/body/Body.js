import React from 'react'
import "./Body.css"
import image from "../images/image.png"

const Body = () => {
  return (
    <>
      <div className='wrapper'>
        <h3 className='welcome'>WELCOME TO HOST BETA</h3>
        <h1 className='head'>Smart Company<br />
          With Perfect<br />
          Web Space<br /></h1>
        <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
          Cras consectetur adipiscing commodo euismod <br />
          condimentum nunc.</p>
      </div>

      <div className='buttons'>
        <button className='first'>Get Started</button>
        <button className='second'>Hosting Plans</button>
      </div>
      <div className='num'>
        <div className='num1'>
          <h1>800</h1>
          <p>Positive Reviews</p>
        </div>
        <div className='num2'>
          <h1>550</h1>
          <p>Active Hosting</p>
        </div>
      </div>
      <img className='image' src={image} alt="image" />
      <img className='responsiveImg' src={image} alt="image" />
    </>
  )
}

export default Body
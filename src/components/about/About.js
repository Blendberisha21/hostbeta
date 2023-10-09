import React from 'react'
import "./About.css"
import image from "../images/imagee.png"

const About = () => {
    return (
        <div id="about">
        <div className='screen'>
            <div className='purple'>
                <img src={image} alt="image" />
            </div>
            <div className='texts'>
                <h3>ABOUT HOST BETA
                </h3>

                <h1>The Perfect Digital <br />
                    Connection</h1>
                <p>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. <br /> Cras consectetur adipiscing.</p>
             <div className='faster1'>
                <h2>Faster Process</h2>
                <h2>Faster Delivery</h2>

                </div>       
                <div className='faster2'>
                <h2>Faster Access</h2>
                <h2>24/7 Full Support</h2>
                </div>
                <button>Discover More</button>
            </div>
        </div>
        </div>
    )
}

export default About
import React from 'react'
import "./Offering.css"
import wordpress from "../images/wordpress.png"
import github from "../images/github.png"
import laravel from "../images/laravel.png"
import elementor from "../images/elementor.png"



const Offering = () => {
  return (
        <div className='offerings'>
        <div className='wideBoxes'>
           <div className='wBox'> 
            <img src={wordpress} alt="wordpress"/>
            <h3>Wordpress</h3>
           </div>

           <div className='wBox'> 
            <img src={github} alt="github"/>
            <h3>Github</h3>
           </div>

           <div className='wBox'> 
            <img src={laravel} alt="laravel"/>
            <h3>Laravel</h3>
           </div>

           <div className='wBox'> 
            <img src={elementor} alt="elementor"/>
            <h3>Elementor</h3>
           </div>
        </div>
        <div className='textyy'>
        <h4> OUR CAPABILITIES </h4>
        <h1>From Skyline to the Shoreline,<br/> We Are There</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur adipiscing Quisque et <br/> imperdiet ipsum. Nunc molestie nunc ac augue sodales luctus..</p>
       <div className='limited1'>
        <p>Unlimited Bandwidth</p> 
        <p>Unlimited Site</p>
       </div>
       <div className='limited2'>
       <p>Super Turbo Power</p> 
        <p>24/7 Full Support More Detail</p>
       </div>
       <button className='button'>More Detail</button>
        </div>
        </div>
  )
}

export default Offering
import React from 'react'
import "./Services.css"
import wordpress from "../images/wordpress.png"
import cloud from "../images/cloud.png"
import ethernet from "../images/ethernet.png"
import www from "../images/www.png"
import ssl from "../images/ssl.png"
import database from "../images/database.png"

const Services = () => {
  return (
    <div id="services">
    <div className='start'>
       <h3> OUR SERVICES</h3>
<h1>Discover Luxury in Web <br/>Hosting</h1>
<div className='boxes1'>
<div className='box'>
<img src={wordpress} alt="wordpress"/>
<h2>Wordpress Hosting</h2>
<p>Lorem ipsum dolor sit amet, <br/> consec tetur adipiscing elit.<br/> Duis efficitur dui nec.</p>
</div>
<div className='box'>
<img src={cloud} alt="cloud"/>
<h2>Cloud Hosting</h2>
<p>Lorem ipsum dolor sit amet, <br/> consec tetur adipiscing elit.<br/> Duis efficitur dui nec.</p>
</div>
<div className='box'>
<img src={ethernet} alt="ethernet"/>
<h2>Website Hosting</h2>
<p>Lorem ipsum dolor sit amet, <br/> consec tetur adipiscing elit.<br/> Duis efficitur dui nec.</p>
</div>
</div>

<div className='boxes2'>
<div className='box'>
<img src={www} alt="www"/>
<h2>Free Domain</h2>
<p>Lorem ipsum dolor sit amet, <br/> consec tetur adipiscing elit.<br/> Duis efficitur dui nec.</p>
</div>
<div className='box'>
<img src={ssl} alt="ssl"/>
<h2>SSL Service</h2>
<p>Lorem ipsum dolor sit amet, <br/> consec tetur adipiscing elit.<br/> Duis efficitur dui nec.</p>
</div>
<div className='box'>
<img src={database} alt="database"/>
<h2>Cloud VPS</h2>
<p>Lorem ipsum dolor sit amet, <br/> consec tetur adipiscing elit.<br/> Duis efficitur dui nec.</p>
</div>
</div>
    </div>
    </div>
  )
}

export default Services
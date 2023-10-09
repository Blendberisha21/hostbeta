import React from 'react'
import "./Start.css"
import guy from "../images/guy.png"

const Start = () => {
  return (
    <div className='starti'>
        <div className='front'>
            <div className='theTexts'>
        <h4>GET STARTED</h4>
        <h2>Let's Start Here! New <br/>
Space for World</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur <br/> 
adipiscing Quisque et imperdiet ipsum.</p>
<div className='buttoni'>
<button className='fst'>Get Started</button>
<button className='snd'>Hosting Plans</button>
</div>
</div>

<div className='imgBody'>
<img src={guy} alt="guy"/>
</div>
</div>

</div>
  )
}

export default Start
import React from 'react'
import "./Map.css"
import map from "../images/map.png"

const Map = () => {
  return (
    <div className='map'>
        <h4>SERVERS WORLDWIDE</h4>
        <h1>Luxurious, Grand, Spacious,<br/>
Always Uptime</h1>
<img src={map} alt="map"/>
    </div>
  )
}

export default Map
import React from 'react'
import "./Company.css"
import greek from "../images/greek.png"
import matuska from "../images/matuska.png"
import express from "../images/express.png"
import david from "../images/david.png"
import breezy from "../images/breezy.png"

const Company = () => {
  return (
    <div className='wrap'>
      <h2>Trusted by 2500+ Company Worldwide</h2>
      <div className='images'>
    <img src={greek} alt="greek"/>
    <img src={matuska} alt="matuska"/>
    <img src={express} alt="express"/>
    <img src={david} alt="david"/>
    <img src={breezy} alt="breezy"/>
    </div>
    <div className='responsive'>
    <img src={greek} alt="greek"/>
    <img src={matuska} alt="matuska"/>
    <img src={express} alt="express"/>
    </div>
    <div className='responsive2'>
  <img src={david} alt="david"/>
    <img src={breezy} alt="breezy"/>
    </div>
    </div>
  )
}

export default Company
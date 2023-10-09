import React from 'react'
import About from './components/about/About'
import Body from './components/body/Body'
import Company from './components/companys/Company'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Map from './components/map/Map'
import Offering from './components/offering/Offering'
import Pricing from './components/pricing/Pricing'
import Services from './components/services/Services'
import Start from './components/start/Start'

const App = () => {
  return (
    <div>
      <Header/>
      <Body/>
      <Company/>
      <About/>
      <Services/>
      <Offering/>
      <Pricing/>
      <Map/>
      <Start/>
      <Footer/>
    </div>
  )
}

export default App
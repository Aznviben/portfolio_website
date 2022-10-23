import React from 'react'
import Background from './Background.jsx'
import Headersocial from './headersocial.jsx'
import ME from '../../assets/StockMale.png'
const Header = () => {
  return (
    <section id="Header">
      <h3>Hi im,</h3>
      <h1>Benjiman Dinal</h1>
     

    <div className= 'container Header_container'> 
    <Headersocial/>
    <Background/>
    </div>

    </section>
  )
}

export default Header

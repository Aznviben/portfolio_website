import React from 'react'
import "./Nav.scss"
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {MdRateReview} from 'react-icons/md'
import{useState} from 'react'
const Nav = () => {
  const [activeNav,setActiveNav]= useState('#'); 
  return (
    <section id="Nav">
      <nav>
        <a href = "#"onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
        <a href = "#About" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>        
        <a href = "#Contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdRateReview/></a>
      </nav>
    </section>
  )
}

export default Nav

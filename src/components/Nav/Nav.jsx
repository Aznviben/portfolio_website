import React from 'react'
import "./Nav.scss"
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {MdRateReview} from 'react-icons/md'
import{useState} from 'react'

const Nav = () => {
  const [activeNav,setActiveNav]= useState('#'); 
  return (
    <div className = "container nav_container" >
      <nav>
        <a href = "#"onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
        <a href = "#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>        
        <a href = "#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdRateReview/></a>
      </nav>
    </div>
  )
}

export default Nav

import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsDribbble} from 'react-icons/bs'
import "./Header.scss"
const Headersocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin className="icon"/></a>
        <a href="https://github.com" target="_blank"><FaGithub className="icon"/></a>
        <a href="https://dribbble.com" target="_blank"><BsDribbble className="icon"/></a>
    </div>

  )
}

export default Headersocial
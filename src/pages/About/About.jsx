import React from 'react'
import './About.scss'
import ME from '../../assets/Testing3.jpg'
import {BsFillAwardFill} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {AiFillFileText} from 'react-icons/ai'
const About = () => {
  return (
    <section id = "about">
          <h2>About Me</h2>

          <div className="container about__container">
            <div className="about__me">
              <div className="about__me-image">
                  <img src={ME} alt="About Image" />
              </div>
            </div>
              
            <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
              <BsFillAwardFill className='about__icon'/>
              <h5> Experience </h5>
              <small>4+ Years of Programming</small>
              </article>
              <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5> Work </h5>
              <small>1+ year of work experience</small>
              </article>
              <article className="about__card">
              <AiFillFileText className='about__icon'/>
              <h5>Involved</h5>
              <small>Student Gov. Presidential Ambassador</small>
              </article>
            </div>
            <p>
            Meet Benjamin, a unique individual who has a passion for both computer science and art.
            He is fascinated by the way technology and creativity can come together to create something truly amazing.
            He spends countless hours honing his skills in both areas, constantly pushing the boundaries of what is possible.
            Whether it's developing a new app, creating a digital masterpiece, or finding new ways to combine the two, Benjamin is always eager to take on the challenge.  
            </p>
            <a href='#contact' className='btn btn-primary'>Lets Talk</a>

            </div>
          </div>
    </section>

  )
}

export default About

import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
// import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const { ref, inView } = useInView()

  return (
    <section id='about' ref={ref}>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className={`about__me ${inView ? 'animation-ltr' : ''}`}>
          <div className="about__me-image">
            <img src={ME} alt='about' />
          </div>
        </div>

        <div className="about__content">
          <div className={`about__cards ${inView ? 'animation-appear' : ''}`}>
            <article className={"about__card"}>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>

          </div>

          <p className={inView ? 'animation-rtl' : ''}>
            My name is Van Linh. Currently I am a Front-End Developer. I'm still trying to learn to become a Full-Stack Developer
          </p>
          <a href="#contact" className={`btn btn-primary ${inView ? 'animation-appear' : ''}`}>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
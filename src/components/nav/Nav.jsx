/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'

const Nav = () => {
  const [activeNav, setActiveNav] = React.useState('#')

  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''}
        onClick={() => setActiveNav('#')}>
        <AiOutlineHome />
        <div className="tooltip">Home</div>
      </a>
      <a href="#about" className={activeNav === '#about' ? 'active' : ''}
        onClick={() => setActiveNav('#about')}>
        <AiOutlineUser />
        <div className="tooltip">About</div>
      </a>
      <a href="#experience" className={activeNav === '#experience' ? 'active' : ''}
        onClick={() => setActiveNav('#experience')}>
        <BiBook />
        <div className="tooltip">Experience</div>
      </a>
      <a href="#services" className={activeNav === '#services' ? 'active' : ''}
        onClick={() => setActiveNav('#services')}>
        <RiServiceLine />
        <div className="tooltip">Services</div>
      </a>
      <a href="#contact" className={activeNav === '#contact' ? 'active' : ''}
        onClick={() => setActiveNav('#contact')}>
        <BiMessageSquareDetail />
        <div className="tooltip">Contact</div>
      </a>
    </nav>
  )
}

export default Nav
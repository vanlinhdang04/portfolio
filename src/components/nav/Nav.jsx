/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
// import { RiServiceLine } from 'react-icons/ri'
import { CiViewList } from 'react-icons/ci'

const Nav = () => {
  // const [activeNav, setActiveNav] = React.useState('#')

  return (
    <nav>
      <a href="#">
        <AiOutlineHome />
        <div className="tooltip">Home</div>
      </a>
      <a href="#about">
        <AiOutlineUser />
        <div className="tooltip">About</div>
      </a>
      <a href="#experience">
        <BiBook />
        <div className="tooltip">Experience</div>
      </a>
      <a href="#portfolio">
        <CiViewList />
        <div className="tooltip">Portfolio</div>
      </a>
      {/* <a href="#services" className={activeNav === '#services' ? 'active' : ''}
        onClick={() => setActiveNav('#services')}>
        <RiServiceLine />
        <div className="tooltip">Services</div>
      </a> */}
      <a href="#contact">
        <BiMessageSquareDetail />
        <div className="tooltip">Contact</div>
      </a>
    </nav>
  )
}

export default Nav
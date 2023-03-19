import React from 'react'
import './footer.css'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { BiCodeAlt, BiHeart } from 'react-icons/bi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Van_Linh</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/vanlinh99" target='_blank' rel='noreferrer'><FaFacebookF /></a>
        <a href="https://www.linkedin.com/in/van-linh-dev/" target='_blank' rel='noreferrer'><FaLinkedinIn /></a>
      </div>

      <div className="footer__copyright">
        <BiCodeAlt />
        <p>&nbsp;with&nbsp;</p>
        <BiHeart />
        <p>&nbsp;by Van Linh</p>
      </div>
    </footer>
  )
}

export default Footer
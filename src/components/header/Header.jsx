import React from 'react'
import CTA from './CTA'
import './header.css'
import HeaderSocial from './HeaderSocial'
import { useInView } from 'react-intersection-observer'


const Header = () => {
  const { ref: infoRef, inView: infoIsVisible } = useInView()

  return (
    <header>
      <div className='container header__container'>
        <div ref={infoRef} className={infoIsVisible ? 'animation-ttb' : ''}>
          <h1 className='header_welcome'>Welcome</h1>
          <br />
          <h2>My name is Van Linh</h2>
          <h5 className='text-light'>Front-End Developer</h5>
        </div>
        <CTA />
        <HeaderSocial />
        {/* <img src={ME} alt='me' style={{
          width:  '22rem',
          height:  '30rem',
          margin: '0 auto'
        }}/> */}

        {/* <div className={`me`}>
          <img src={ME} alt='me'/>
        </div> */}

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
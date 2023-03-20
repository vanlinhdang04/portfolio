import React from 'react'
import { useInView } from 'react-intersection-observer'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  const {ref: ctaRef, inView: ctaIsVisible} = useInView()

  return (
    <div className='cta' ref={ctaRef}>
        <a href={CV} download className={`btn ${ctaIsVisible ? 'animation-ltr':''}`}>Download CV</a>
        <a href='#contact' className={`btn btn-primary ${ctaIsVisible ? 'animation-rtl':''}`}>Let's talk</a>
    </div>
  )
}

export default CTA
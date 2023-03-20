import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href='https://www.linkedin.com/in/van-linh-dev/' target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href='https://github.com/vanlinhdang04' target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
    </div>
  )
}

export default HeaderSocial
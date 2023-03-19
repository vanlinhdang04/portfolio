import React, { useRef } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { SiZalo } from 'react-icons/si'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g1rcsbq', 'template_wbo9gcm', form.current, 'l7IEHlI4I6uQ5Chh1')
      .then((result) => {
        alert('Submit Successfully')
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>vanlinhdang1999@gmail.com</h5>
            <a href="mailto:vanlinhdang1999@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Van Linh</h5>
            <a href="https://m.me/vanlinh99" target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <SiZalo className='contact__option-icon' />
            <h4>Zalo</h4>
            <h5>+84 395 482 136</h5>
            <a href="https://zalo.me/0395482136" target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
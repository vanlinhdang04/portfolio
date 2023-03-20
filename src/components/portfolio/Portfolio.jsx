import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.png'
import { useInView } from 'react-intersection-observer'
// import IMG4 from '../../assets/portfolio4.jpg'
// import IMG5 from '../../assets/portfolio5.png'
// import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'ZenOne - App Introduction',
    // github: 'https://github.com',
    demo: 'https://zenone.com.vn/',
    role: 'Frontend Contribution'
  },
  {
    id: 2,
    image: IMG2,
    title: 'ZenGroup - Company Introduction',
    // github: 'https://github.com',
    demo: 'https://zengroup.com.vn/',
    role: 'Frontend Contribution'
  },
  {
    id: 3,
    image: IMG4,
    title: 'VietThien = Ecommerce Agricultural Products',
    // github: 'https://github.com',
    demo: 'https://travietthien.vn/',
    role: 'Frontend Contribution'
  },
  {
    id: 4,
    image: IMG3,
    title: 'Fasmono - Ecommerce Fashion',
    // github: 'https://github.com',
    demo: 'https://fasmono.vn/',
    role: 'Frontend Contribution'
  },
]

const Portfolio = () => {
  const {ref, inView} = useInView()

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container" ref={ref}>
        {
          data?.map((item) => (
            <article className={`portfolio__item ${inView ? 'animation-appear':''}`} key={item.id}>
              <div className="portfolio__item-image">
                <img src={item.image} alt="" />
              </div>
              <h3>{item.title}</h3>
              <p className='portfolio_item-role'>{item.role}</p>
              <div className="portfolio__item-cta">
                {item.github ?
                  <a href={item.github} className="btn" target='_blank' rel="noreferrer">Github</a>
                  :<></>
                }
                <a href={item.demo} className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
              </div>
            </article>
          ))
        }
      </div>
    </section>
  )
}

export default Portfolio
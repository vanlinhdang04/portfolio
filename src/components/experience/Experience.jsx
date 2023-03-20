import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import { useInView } from 'react-intersection-observer';

const frontend = [
  {
    title: 'HTML',
    level: 'Intermediate'
  },
  {
    title: 'CSS',
    level: 'Intermediate'
  },
  {
    title: 'JavaScript',
    level: 'Intermediate'
  },
  {
    title: 'ReactJS',
    level: 'Intermediate'
  },
  {
    title: 'NextJS',
    level: 'Intermediate'
  },
  {
    title: 'Material UI',
    level: 'Intermediate'
  },
  {
    title: 'Mantine UI',
    level: 'Intermediate'
  },
  {
    title: 'Bootstrap',
    level: 'Intermediate'
  },
];

const backend = [
  {
    title: 'NodeJS',
    level: 'Starter'
  },
  {
    title: 'SQL Server',
    level: 'Starter'
  },
  {
    title: 'MongoDB',
    level: 'Starter'
  },
]

const Experience = () => {
  const { ref, inView } = useInView()

  return (
    <section id='experience' ref={ref}>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className={`experience__frontend ${inView ? 'animation-ltr' : ''}`}>
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontend?.map((item) => (
              <article className="experience__details" key={item.title}>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>{item.title}</h4>
                  <small className='text-light'>{item.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        {/* ==== END OF FRONTEND */}
        {/* ==== START OF BACKEND */}
        <div className={`experience__backend ${inView ? 'animation-rtl' : ''}`}>
          <h3>Backend Development</h3>
          <div className="experience__content">
            {backend?.map((item) => (
              <article className="experience__details" key={item.title}>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>{item.title}</h4>
                  <small className='text-light'>{item.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
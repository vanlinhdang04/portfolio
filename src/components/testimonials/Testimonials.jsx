import React from 'react'
import AVTR1 from '../../assets/avatar1.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './testimonials.css'

const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: 'Eva',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur dolorem iure incidunt quis tempora voluptas omnis error libero, dolor quo suscipit deserunt sed beatae, minus commodi eius, esse vel iusto.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data?.map((item) => (
          <SwiperSlide key={item.id} className="testimonial">
            <div className="client__avatar">
              <img src={item.avatar} alt="Client avatar" />
            </div>
            <h5 className='client__name'>{item.name}</h5>
            <small className="client__review">
              {item.review}
            </small>
          </SwiperSlide>
        ))}

      </Swiper>
    </section>
  )
}

export default Testimonials
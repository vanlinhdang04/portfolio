import React, { useContext } from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import { useInView } from "react-intersection-observer";
import { CommonContext } from "../../context/CommonContext";
import commonTypes from "../../context/types/commonTypes";
// import IMG4 from '../../assets/portfolio4.jpg'
// import IMG5 from '../../assets/portfolio5.png'
// import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "ZenOne - App Introduction",
    // github: 'https://github.com',
    demo: "https://zenone.com.vn/",
    role: "Frontend Contribution",
  },
  {
    id: 2,
    image: IMG2,
    title: "ZenGroup - Company Introduction",
    // github: 'https://github.com',
    demo: "https://zengroup.com.vn/",
    role: "Frontend Contribution",
  },
  {
    id: 3,
    image: IMG4,
    title: "VietThien - Ecommerce Agricultural Products",
    // github: 'https://github.com',
    demo: "https://travietthien.vn/",
    role: "Frontend Contribution",
  },
  {
    id: 4,
    image: IMG3,
    title: "Fasmono - Ecommerce Fashion",
    // github: 'https://github.com',
    demo: "https://fasmono.vn/",
    role: "Frontend Contribution",
  },
  {
    id: 5,
    image: IMG5,
    title: "ZenApp - Ecommerce Convenient Store",
    // github: 'https://github.com',
    demo: "https://zenapp.flexzen.app/",
    role: "Frontend Contribution",
  },
];

const Portfolio = () => {
  const { ref, inView } = useInView();
  const { dispatch } = useContext(CommonContext);

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container" ref={ref}>
        {data?.map((item) => (
          <article
            className={`portfolio__item ${inView ? "animation-appear" : ""}`}
            key={item.id}
          >
            <div className="portfolio__item-image">
              <img src={item.image} alt="" />
            </div>
            <h3>{item.title}</h3>
            <p className="portfolio_item-role">{item.role}</p>
            <div className="portfolio__item-cta">
              {item.github ? (
                <a
                  href={item.github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              ) : (
                <></>
              )}
              <a
                href={item.demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Website
              </a>
              <div
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
                onClick={() => dispatch({ type: commonTypes.popup.OPEN })}
              >
                Detail
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

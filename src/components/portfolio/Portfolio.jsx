import React, { useContext } from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";
import { useInView } from "react-intersection-observer";
import { CommonContext } from "../../context/CommonContext";
import commonTypes from "../../context/types/commonTypes";
// import IMG4 from '../../assets/portfolio4.jpg'
// import IMG5 from '../../assets/portfolio5.png'
// import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG6,
    title: "ZIP.URL - URL Shorten Website",
    tech: "NodeJS (ExpressJS), EJS, Bootstrap",
    desc: "ZIP.URL: Simplify your links with ease. Shorten and manage long URLs effortlessly.",
    github: "https://github.com/vanlinhdang04/zipurl",
    demo: "https://zipurl.onrender.com/",
    role: "Personal Project",
  },
  {
    id: 2,
    image: IMG1,
    title: "ZenOne - App Introduction",
    tech: "ReactJS, NextJS, Mantine UI",
    teamSize: 3,
    desc: "ZenOne: Simplifying real estate investment with an intuitive app. Get comprehensive property information, market insights, and maximize your returns effortlessly.",
    // github: 'https://github.com',
    demo: "https://zenone.com.vn/",
    role: "Frontend Contribution",
  },
  {
    id: 3,
    image: IMG2,
    title: "ZenGroup - Company Introduction",
    tech: "ReactJS, NextJS, Mantine UI",
    teamSize: 2,
    desc: "Introducing ZenGroup: Your go-to for real estate and fashion solutions. Explore their impressive portfolio and discover the latest trends in one place.",
    // github: 'https://github.com',
    demo: "https://zengroup.com.vn/",
    role: "Frontend Contribution",
  },
  {
    id: 4,
    image: IMG4,
    title: "VietThien - Ecommerce Agricultural Products",
    tech: "ReactJS, NextJS, Mantine UI",
    teamSize: 4,
    desc: "Introducing VietThien: Your ultimate eCommerce destination for a wide range of high-quality products. Enjoy a seamless shopping experience with secure payments and efficient shipping services.",
    // github: 'https://github.com',
    demo: "https://travietthien.vn/",
    role: "Frontend Contribution",
  },
  {
    id: 5,
    image: IMG3,
    title: "Fasmono - Ecommerce Fashion",
    tech: "ReactJS, NextJS, Mantine UI",
    teamSize: 4,
    desc: "Fasmono: Your go-to fashion eCommerce destination. Discover trendy clothing and accessories with a seamless shopping experience.",
    // github: 'https://github.com',
    demo: "https://fasmono.vn/",
    role: "Frontend Contribution",
  },
  {
    id: 6,
    image: IMG5,
    title: "ZenApp - Ecommerce Convenient Store",
    tech: "ReactJS, Material UI",
    teamSize: 6,
    desc: "ZenApp: Redefining e-commerce with seamless shopping, secure payments, and a wide range of products. Experience convenience and satisfaction at your fingertips.",
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
              <a
                href={item.demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
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

              <div
                className="btn"
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  dispatch({ type: commonTypes.popup.OPEN, payload: item })
                }
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

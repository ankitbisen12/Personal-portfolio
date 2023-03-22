import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../assests/html.svg";
import img2 from "../assests/css.svg";
import img3 from "../assests/js.svg";
import img4 from "../assests/react.svg";
import img5 from "../assests/redux.svg";
import img6 from "../assests/c++.svg";
import img7 from "../assests/oops.jpg"
import img8  from "../assests/dbms.png";
import img9  from "../assests/DSA.png";
import img10 from "../assests/sql.png";
import './Skills.css';

const skillsSet = [
  { id: Math.random() * 5, img: img1, skill: "HTML" },
  { id: Math.random() * 5, img: img2, skill: "CSS" },
  { id: Math.random() * 5, img: img3, skill: "Javascript" },
  { id: Math.random() * 5, img: img4, skill: "ReactJs" },
  { id: Math.random() * 5, img: img5, skill: "Redux" },
  { id: Math.random() * 5, img: img6, skill: "C++" },
  { id: Math.random() * 5, img: img7, skill: "OOPs" },
  { id: Math.random() * 5, img: img8, skill: "DBMS" },
  { id: Math.random() * 5, img: img9, skill: "DSA" },
  { id: Math.random() * 5, img: img10, skill: "SQL" },
];

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skil = skillsSet.map((item) => (
    <div className="item" key={item.id}>
      <img src={item.img} alt="" />
      <h5>{item.skill}</h5>
    </div>
  ));

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {skil}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;












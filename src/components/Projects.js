import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import img1 from "../assests/project1.png";
import img2 from "../assests/project2.png";
import img3 from "../assests/project3.png";
import img4 from "../assests/project4.png";
import img5 from "../assests/project5.png";
import "./Project.css";

const projects = [
  {
    id: Math.random() * 5,
    title: "Guess my Number",
    description: `React Hooks (useState
            ,useEffect), javascript concepts like async, await,
            APIs and reactjs basics is used. In this website
            we get the weather forecast by entering the city
            name.`,
    img: img1,
    href:"https://ankitbisen12.github.io/Guess_the_number/"
  },
  {
    id: Math.random() * 5,
    title: "Weather website",
    description: `React Hooks (useState
        ,useEffect), javascript concepts like async, await,
        APIs and reactjs basics is used. In this website
        we get the weather forecast by entering the city
        name.`,
    img: img2,
    href: "https://weather-app-git-main-ankitbisen12.vercel.app/"
  },
  {
    id: Math.random() * 5,
    title: "Dice Game",
    description: `HTML,CSS and Javascript is used. It
    is a two player dice game. I made this project
    during learning Javascript`,
    img: img3,
    href: "https://ankitbisen12.github.io/Pig_game/"
  },
  {
    id: Math.random() * 5,
    title: "Todo App",
    description: `It is a simple todo app where user
    can add their task. React Hooks useState ,
    javascript concepts like eventlistener, function
    components and reactjs basics is used. Css is
    used is used for styling.`,
    img: img4,
    href: "https://todo-app-react1.vercel.app/"
  },
  {
    id: Math.random() * 5,
    title: "Food Delievery App",
    description: `This app fetches meals
    from database and it is based on ReactJS.
    Used: ReactJs, context-api, CSS modules ,google
    firebase,hooks like useState,useEffect.`,
    img: img5,
    href: "https://pizza-sand.vercel.app/"
  },
];

const Projects = () => {
  const project = projects.map((item, index) => {
    return (
      <Col sm={6} md={4} key={item.id}>
        <div className="proj-imgbx">
          <img src={item.img} alt="immage" />
          <div className="proj-txtx">
            <h4>{item.title}</h4>
            <span>{item.description}</span>
            <a href={item.href}><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        </div>
      </Col>
    );
  });

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>{project}</Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;

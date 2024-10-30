import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/news.jfif";
import projImg2 from "../assets/img/TextUtils.png";
import projImg3 from "../assets/img/ecomm.jfif";
import projImg4 from "../assets/img/coaching.jfif";
import projImg5 from "../assets/img/Tapp.jpg";
import projImg6 from "../assets/img/calc.jfif";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "Institute Website",
      description: "Design an Institute website as Freelancing project",
      imgUrl: projImg4,
      link: "https://sk100plus.github.io/tutionclasses/index.html"
    },
    {
      title: "NewsApp",
      description: "Breaking news of World",
      imgUrl: projImg1,
      link: "https://vercel-deploy-jslj.vercel.app/NEWS_APP"
    },
    {
      title: "TextUtil-App",
      description: "Utilise any paragraph",
      imgUrl: projImg2,
      link: "https://sk100plus.github.io/textcheck/"
    },
    {
      title: "Ecommerce Website",
      description: "Design & Development",
      imgUrl: projImg3,
      link: "https://github.com/Sk100plus/Ecommerce"
    },
    {
      title: "Todo App",
      description: "Design & Development a Todo App for adding and removing data",
      imgUrl: projImg5,
      link: "https://sk100plus.github.io/to-do-list/"
    },
    {
      title: "Calculator App",
      description: "This is a simple calculator made up using Javascript",
      imgUrl: projImg6,
      link: "https://stunning-squirrel-165862.netlify.app/"
    },
  ];

  const projects2 = [
    {
      title: "Institute Website",
      description: "Design an Institute website as Freelancing project",
      imgUrl: projImg4,
      link: "https://sk100plus.github.io/tutionclasses/index.html"
    },
    {
      title: "NewsApp",
      description: "Breaking news of World",
      imgUrl: projImg1,
      link: "https://vercel-deploy-jslj.vercel.app/NEWS_APP"
    },
    {
      title: "TextUtil-App",
      description: "Utilise any paragraph",
      imgUrl: projImg2,
      link: "https://sk100plus.github.io/textcheck/"
    },
    {
      title: "Ecommerce Website",
      description: "Design & Development",
      imgUrl: projImg3,
      link: "https://github.com/Sk100plus/Ecommerce"
    },
    {
      title: "Todo App",
      description: "Design & Development a Todo App for adding and removing data",
      imgUrl: projImg5,
      link: "https://sk100plus.github.io/to-do-list/"
    },
    {
      title: "Calculator App",
      description: "This is a simple calculator made up using Javascript",
      imgUrl: projImg6,
      link: "https://stunning-squirrel-165862.netlify.app/"
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have developed numerous projects using HTML, CSS, JavaScript, React, Bootstrap, and the MERN stack. Some of my key projects include designing dynamic user interfaces with Mern Stack, developing CRUD applications with seamless data handling, and deploying robust MERN stack applications with Express and MongoDB on the backend.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>

                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>           
                               </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  )
}

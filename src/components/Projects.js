import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import operation_room_kit8net from "../assets/img/operation-clipart-16.jpg"
import colorSharp2 from "../assets/img/Google.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import image from "../assets/img/IMG_2199 (1).webp"

export const Projects = () => {

  const project1 = [
    {
      title: " ",
      description: " ",
    },
    {
      title: "Google Clone",
      description: "Using React.js",
      imgUrl: colorSharp2,
    },
   
  ];
  const project2 = [
    {
      title: " ",
      description: " ",
    },
    {
      title: "CRUD operation",
      description: "Using React.js",
      imgUrl: operation_room_kit8net,
    },
  ];
  const project3 = [
    {
      title: " ",
      description: " ",
    },
    {
      title: "Semi-Automatic Solar Panel Cleaning System And It's Analysis",
      description: "In My Academic",
      imgUrl: image,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
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
                        <p>I developed a Google clone using React.js .The project involved creating a user interface that replicated the
                         Google search engine's design and functionality. The project included implementing a search bar,
                         autocomplete feature, search suggestions, and displaying search results. To develop the project, I used the
                         Google search API to retrieve and display search results on the webpage.</p>
                       <a href='https://sakib-google-clone.netlify.app/' id='p'>Google Clone Link</a>
                        {
                          project1.map((project, index) => {
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
                      <p>A CRUD operation project using React.js involves creating a web application that allows users to perform basic
                         database operations such as creating, reading, updating, and deleting data. The project includes a front-end
                         built using React.js, a back-end implemented using a server-side technology, a database to store the data, and
                         an API to communicate between the front-end and back-end.</p>
                         <h6></h6>
                        {
                          project2.map((project, index) => {
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
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                      <p>In this project, Remote control base Solar panel cleaning system is designed and implemented for dust
                         removal. The purposed of solar panel cleaner is water less, Economical and semi-Automatic. A dc motor is
                         used to power the cleaning brush . Since the system does not need the water to clean solar panel, if avoids the 
                         wastage of water and effective the desert areas.
                         </p>
                         <h6></h6>
                      {
                        project3.map((project, index) => {
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
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

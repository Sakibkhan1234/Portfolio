import React from 'react';

import andromeda from "../assets/img/Become-a-programmer-by-learning-core-Java-skills-with-this-free-course.jpg";
import babylon from "../assets/img/wp7421222.webp";
import blockx from "../assets/img/11.jpg";
import uptick from "../assets/img/uptick.png";
import celestia from "../assets/img/javascript.jpg";
import coreum from "../assets/img/3949082.webp";
import defund from "../assets/img/sql-database.jpg";
import dymension from "../assets/img/j2ee-training-in-chennai.jpg";
import gitopia from "../assets/img/Java Hibernate Framework Learn Object Relational Mapping ORM.jpg";
import humans from "../assets/img/javaspring.webp";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
<script async defer src="https://buttons.github.io/buttons.js"></script>

export const Testnet = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="testnet" id="testnet">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2> Key Skills ✨</h2>
                        <br></br>
                        <br></br>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                            <a href="https://www.javatpoint.com/what-is-core-java" target="_blank">  <img src={andromeda} alt="Image"  id='n'/></a>
                            <a href="https://www.javatpoint.com/what-is-core-java" target="_blank">  <h5>Core Java</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://www.javatpoint.com/html-tutorial" target="_blank"> <img src={babylon} alt="Image" id='n1'/></a>
                            <a href="https://www.javatpoint.com/html-tutorial" target="_blank">  <h5>HTML</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://www.javatpoint.com/what-is-css" target="_blank"> <img src={blockx} alt="Image" id='n1' /></a>
                            <a href="https://www.javatpoint.com/what-is-css" target="_blank">  <h5>CSS</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://www.javatpoint.com/javascript-tutorial" target="_blank"> <img src={celestia} alt="Image" id='n1'/></a>
                            <a href="https://www.javatpoint.com/javascript-tutorial" target="_blank">  <h5>JavaScript</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://www.javatpoint.com/reactjs-tutorial" target="_blank"> <img src={coreum} alt="Image" id='n1'/></a>
                            <a href="https://www.javatpoint.com/reactjs-tutorial" target="_blank">  <h5>React.js</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://www.javatpoint.com/sql-tutorial" target="_blank"> <img src={defund} alt="Image" id='n1' /></a>
                            <a href="https://www.javatpoint.com/sql-tutorial" target="_blank">  <h5>SQL</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://www.educba.com/what-is-j2ee/" target="_blank"> <img src={dymension} alt="Image" id='n2'/></a>
                            <a href="https://www.educba.com/what-is-j2ee/" target="_blank">  <h5>J2EE</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://www.javatpoint.com/hibernate-tutorial" target="_blank"> <img src={gitopia} alt="Image" id='n1'/></a>
                            <a href="https://www.javatpoint.com/hibernate-tutorial" target="_blank"> <h5>Hibernate</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://www.javatpoint.com/spring-tutorial" target="_blank"> <img src={humans} alt="Image" id='n1' /></a>
                            <a href="https://www.javatpoint.com/spring-tutorialnpm" target="_blank"> <h5>Spring</h5></a>
                            </div>  
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
  
}

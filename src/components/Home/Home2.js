import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/01.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a full-stack developer with 8 years of experience.
              <br />
              One of my core principles is to prioritize efficiency and meet
              deadlines without compromising on the quality of our work.
              <br />
              Also, the satisfaction of clients and establishing positive
              relationships with clients are of utmost importance to me.
              <br />
              I strive for perfection in every aspect of our projects, ensuring
              that the end result is of the highest standard.
              <br />
              Flexibility is another strength of me. I am available to work at
              any time that suits your needs, and my team members are always
              ready to collaborate whenever necessary.
              <br />
              I believe that effective communication and collaboration are key
              to building successful partnerships in the IT industry.
              <br />
              I am open to discussing any potential opportunities and exploring
              how we can create world-class software products together., I
              think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple">
                  {" "}
                  C++, Javascript, HTML, CSS, Java, and Python.{" "}
                </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">
                  Web Technologies, &nbsp;App Development, &nbsp;AI Technologies{" "}
                </b>{" "}
                and also in areas related to{" "}
                <b className="purple">Blockchain.</b>
              </i>
              <br />
              <br />I always apply my passion for developing products with{" "}
              <b className="purple">
                Node.js, &nbsp;Spring Boot, &nbsp;Django, &nbsp;Laravel{" "}
              </b>{" "}
              and
              <i>
                <b className="purple"> Modern Javascript Frameworks</b>
              </i>
              &nbsp; like
              <i>
                <b className="purple">
                  {" "}
                  React.js, &nbsp;Next.js, &nbsp;Redux, &nbsp;Angular,
                  &nbsp;Vue.js, &nbsp;HTML5, &nbsp;CSS3 and &nbsp;jQuery
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid circle-avatar"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/wifesunsdev0111"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

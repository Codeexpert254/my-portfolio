import { Container, Row, Col, Nav, Tab, TabContent } from "react-bootstrap";
import { ProjectCard, ProjectCard2, ProjectCard3 } from "./ProjectCard";
import projImg1 from "../assets/img/ecommerce.png";
import projImg2 from "../assets/img/gamedev.png";
import projImg3 from "../assets/img/libmgmt.png";
import projImg4 from "../assets/img/pycalc.png";
import projImg5 from "../assets/img/winlinmac.png";
import projImg6 from "../assets/img/vowelcounter.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const projects = [
    {
      title: "Webflow Space Calendar",
      description: "Design and Development",
      iframeURL: "https://www.behance.net/embed/project/203819547?ilo0=1",
    },
    {
      title: "Krypto Website",
      description: "Design and Development",
      iframeURL: "https://www.behance.net/embed/project/203539779?ilo0=1",
    },
    {
      title: "Coffee App",
      description: "Design and Development",
      iframeURL: "https://www.behance.net/embed/project/200394195?ilo0=1",
    },
    {
      title: "Masai Delivery App",
      description: "Design and Development",
      iframeURL: "https://www.behance.net/embed/project/202096711?ilo0=1",
    },
    {
      title: "E-Learn Website",
      description: "Design and Development",
      iframeURL: "https://www.behance.net/embed/project/190917449?ilo0=1",
    },
    {
      title: "School Management System",
      description: "Design and Development",
      iframeURL: "https://www.behance.net/embed/project/111889357?ilo0=1",
    },
  ];

  const projects2 = [
    {
      title: "Hire Me Now",
      description: "Graphics Design",
      iframeURL: "https://www.behance.net/embed/project/187396375?ilo0=1",
    },
    {
      title: "Infographics Design",
      description: "Graphics Design",
      iframeURL: "https://www.behance.net/embed/project/187396463?ilo0=1",
    },
    {
      title: "Smart Class Poster",
      description: "Graphics Design",
      iframeURL: "https://www.behance.net/embed/project/137692801?ilo0=1",
    },
    {
      title: "Business Card",
      description: "Graphics Design",
      iframeURL: "https://www.behance.net/embed/project/125565269?ilo0=1",
    },
    {
      title: "My Logo Design",
      description: "Graphics Design",
      iframeURL: "https://www.behance.net/embed/project/117507125?ilo0=1",
    },
    {
      title: "Help Movie Poster",
      description: "Graphics Design",
      iframeURL: "https://www.behance.net/embed/project/183171985?ilo0=1",
    },
  ];
  const projects3 = [
    {
      title: "E-Commerce App",
      description: "Software Development",
      imgURL: projImg1,
      githubURL: "https://github.com/Codeexpert254/E-Commerce-App",
    },
    {
      title: "Game-Dev Website",
      description: "Software Development",
      imgURL: projImg2,
      githubURL: "https://github.com/Codeexpert254/Game-Dev",
    },
    {
      title: "Library Management System",
      description: "Software Development",
      imgURL: projImg3,
      githubURL: "https://github.com/Codeexpert254/Library",
    },
    {
      title: "Simple Calculator",
      description: "Software Development",
      imgURL: projImg4,
      githubURL: "https://github.com/Codeexpert254/PyCalculator",
    },
    {
      title: "Winlinmac Tutorials Website",
      description: "Software Development",
      imgURL: projImg5,
      githubURL: "https://github.com/Codeexpert254/winlinmactutorials",
    },
    {
      title: "Vowel Counter",
      description: "Software Development",
      imgURL: projImg6,
      githubURL: "https://github.com/Codeexpert254/vowelCounter",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              My portfolio features a diverse range of projects that highlight
              my expertise in Front-end Development, UI/UX Designing, and
              Graphics Designing. From creating dynamic web applications with
              React to designing user-centric interfaces and captivating visual
              content, my work demonstrates a balance between aesthetics and
              functionality. I have developed scalable web solutions, engaging
              animations, and responsive designs that cater to real-world user
              needs. Each project reflects my commitment to innovation,
              attention to detail, and delivering impactful results tailored to
              client objectives.
            </p>
            <Tab.Container id="projects-tab" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">UI/UX Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Graphics Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Software Development</Nav.Link>
                </Nav.Item>
              </Nav>
              <TabContent>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects2.map((project, index) => (
                      <ProjectCard2 key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projects3.map((project, index) => (
                      <ProjectCard3 key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
              </TabContent>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};

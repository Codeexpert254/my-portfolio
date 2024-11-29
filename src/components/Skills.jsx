import { Col, Container, Row } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";

export const Skills = () => {
  const items = [
    { img: meter1, title: "Front-end Development" },
    { img: meter2, title: "UI/UX Designing" },
    { img: meter3, title: "Graphics Designing" },
    { img: meter1, title: "React Developer" },
    { img: meter2, title: "Web Animation" },
  ];

  // Duplicate items for seamless looping
  const loopedItems = [...items, ...items];

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                I specialize in Front-end Development, UI/UX Designing, and
                Graphics Designing, with a focus on creating visually appealing
                and highly functional solutions. My expertise spans crafting
                interactive user interfaces, designing seamless user
                experiences, and delivering compelling visual content. As a
                React Developer, I bring efficiency and innovation to web
                applications, ensuring scalability and performance. Whether it’s
                web animation, graphic design, or intuitive front-end systems, I
                am committed to translating ideas into impactful digital
                solutions tailored to client and user needs.
              </p>
              <div className="scroll-container">
                <div className="scroll-wrapper">
                  {loopedItems.map((item, index) => (
                    <div className="scroll-item" key={index}>
                      <img src={item.img} alt={item.title} />
                      <h5>{item.title}</h5>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

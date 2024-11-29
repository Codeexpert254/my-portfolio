import { useState, useEffect, useCallback, useMemo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/programmer.svg"

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100 - Math.random() * 10);
  const period = 300;

  // Use useMemo to stabilize the toRotate array
  const toRotate = useMemo(
    () => ["Front-end Developer", "UI/UX Designer", "Graphics Designer"],
    []
  );

  // Use useCallback to memoize the tick function
  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setDelta(500);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
    }
  }, [isDeleting, loopNum, period, text.length, toRotate]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [tick, delta]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm Masai Abraham a `}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              I am a dedicated Front-end Developer, UI/UX Designer, and Graphics
              Designer with a passion for building efficient and innovative
              front-end solutions. My strong background in ICT, coupled with my
              expertise in React, allows me to create dynamic, interactive web
              applications with clean, user-friendly interfaces.
            </p>
            <button onClick={() => console.log("connect")}>
              Let’s Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="header image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

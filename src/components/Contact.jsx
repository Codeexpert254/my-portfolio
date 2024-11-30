import { useState } from "react";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

const formInitialDetails = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

export const Contact = () => {
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    try {
      const response = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
      
    
      console.log("Raw response:", response);
    
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
    
      const result = await response.json();
      console.log("Parsed result:", result);
    
      if (result.code === 200) {
        setStatus({ success: true, message: "Message sent successfully" });
        setButtonText("Sent");
        setFormDetails(formInitialDetails); // Clear form
        setTimeout(() => setButtonText("Send"), 3000); // Reset after 3 seconds
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error caught", error);
      setStatus({
        success: false,
        message: "Something went wrong. Please try again.",
      });
      setButtonText("Send");
    }
  };    

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get in Touch</h2>
          </Col>
          <form onSubmit={handleSubmit}>
            <Row>
              <Col sm={6}>
                <input
                  type="text"
                  value={formDetails.firstName}
                  placeholder="First Name"
                  onChange={(e) => onFormUpdate("firstName", e.target.value)}
                />
              </Col>
              <Col sm={6}>
                <input
                  type="text"
                  value={formDetails.lastName}
                  placeholder="Last Name"
                  onChange={(e) => onFormUpdate("lastName", e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <input
                  type="email"
                  value={formDetails.email}
                  placeholder="Email Address"
                  onChange={(e) => onFormUpdate("email", e.target.value)}
                />
              </Col>
              <Col sm={6}>
                <input
                  type="phone"
                  value={formDetails.phone}
                  placeholder="Phone No:"
                  onChange={(e) => onFormUpdate("phone", e.target.value)}
                />
              </Col>
            </Row>
            {/* <Row>
              <Col>
                <textarea
                  rows="6"
                  value={formDetails.message}
                  placeholder="Message"
                  onChange={(e) => onFormUpdate("message", e.target.value)}
                ></textarea>
                <button type="submit">
                  <span>{buttonText}</span>
                </button>
              </Col>
              {status.message && (
                <Col>
                  <p
                    className={status.success === false ? "danger" : "success"}
                  >
                    {status.message}
                  </p>
                </Col>
              )}
            </Row> */}
            <Row>
  <Col>
    <textarea
      rows="6"
      value={formDetails.message}
      placeholder="Message"
      onChange={(e) => onFormUpdate("message", e.target.value)}
    ></textarea>
    <button type="submit">
      <span>{buttonText}</span>
    </button>
  </Col>
  {status.message && (
    <Col>
      <p className={status.success === false ? "danger" : "success"}>
        {status.message}
      </p>
    </Col>
  )}
</Row>
          </form>
        </Row>
      </Container>
    </section>
  );
};

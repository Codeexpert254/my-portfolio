import React from "react";
import { useState } from "react";
import { Alert, Col, Row } from "react-bootstrap";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState({ status: null, message: "" });

  const clearFields = () => setEmail("");

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();

    if (email && email.includes("@")) {
      try {
        const response = await fetch("/.netlify/functions/newsletter", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {
          const data = await response.json();
          setFeedback({ status: "success", message: data.message });
          clearFields();
        } else {
          const data = await response.json();
          setFeedback({ status: "error", message: data.message });
        }
      } catch (error) {
        setFeedback({
          status: "error",
          message: "An error occurred. Please try again.",
        });
        console.error("Error:", error);
      }
    } else {
      setFeedback({
        status: "error",
        message: "Please enter a valid email address.",
      });
    }
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Subscribe to my Newsletter
              <br /> & Never miss the latest updates
            </h3>
            {feedback.status === "sending" && <Alert>Sending...</Alert>}
            {feedback.status === "error" && (
              <Alert variant="danger">{feedback.message}</Alert>
            )}
            {feedback.status === "success" && (
              <Alert variant="success">{feedback.message}</Alert>
            )}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleNewsletterSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default Newsletter;

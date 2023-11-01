"use client";
import { Layout, Row, Col } from "antd";

const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer
      style={{ background: "#001529", color: "white", textAlign: "center" }}
    >
      <Row>
        <Col>
          <h2>About Us</h2>
          <p>
            Welcome to TravelBD.com - Your premier choice for convenient and
            comfortable bus travel in Bangladesh. We are dedicated to providing
            you with top-notch transportation services, making your journeys
            across Bangladesh seamless and enjoyable.
          </p>
        </Col>
        <Col>
          <h2>Services</h2>
          <p>Service 1</p>
          <p>Service 2</p>
          <p>Service 3</p>
        </Col>
        <Col>
          <h2>Contact Us</h2>
          <p>
            For inquiries, suggestions, or assistance, please do not hesitate to
            get in touch with us. We value your feedback and are here to help
            you with any questions you may have.
          </p>
          <p>
            <strong>Name:</strong> Md Imran Hossain
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:imranhossain1402@gmail.com">
              imranhossain1402@gmail.com
            </a>
          </p>
        </Col>

        <Col>
          <h2>Follow Us</h2>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </Col>
      </Row>
      <div style={{ padding: "20px 0" }}>
        &copy; Md Imran Hossain. All rights reserved.
      </div>
    </Footer>
  );
};

export default FooterComponent;

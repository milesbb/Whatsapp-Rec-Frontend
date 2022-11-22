import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div style={{ width: "100vw", background: "#273443" }}>
        <Container>
          <Row>
            <Col className="p-5">
              <div className="mb-3">
                <h4
                  className="text-white"
                  style={{ fontSize: "1rem", letterSpacing: ".1rem" }}
                >
                  WHATSAPP
                </h4>
              </div>

              <ul
                className="text-left text-white "
                style={{ listStyleType: "none", padding: 0, margin: 0 }}
              >
                <li className="text-left">Features</li>
                <li className="text-left">Download</li>
                <li className="text-left">WhatsApp Web</li>
                <li className="text-left">Business</li>
                <li className="text-left">Privacy</li>
              </ul>
            </Col>
            <Col className="p-5">
              <div className="mb-3">
                <h4
                  className="text-white"
                  style={{ fontSize: "1rem", letterSpacing: ".1rem" }}
                >
                  COMPANY
                </h4>
              </div>

              <ul
                className="text-left text-white "
                style={{ listStyleType: "none", padding: 0, margin: 0 }}
              >
                <li className="text-left">About</li>
                <li className="text-left">Careers</li>
                <li className="text-left">Brand Center</li>
                <li className="text-left">Get in touch</li>
                <li className="text-left">Blog</li>
                <li className="text-left">WhatsApp Stories</li>
              </ul>
            </Col>
            <Col className="p-5">
              <div className="mb-3">
                <h4
                  className="text-white"
                  style={{ fontSize: "1rem", letterSpacing: ".1rem" }}
                >
                  Download
                </h4>
              </div>

              <ul
                className="text-left text-white "
                style={{ listStyleType: "none", padding: 0, margin: 0 }}
              >
                <li className="text-left">Mac/PC</li>
                <li className="text-left">Android</li>
                <li className="text-left">iPhone</li>
              </ul>
            </Col>
            <Col className="p-5">
              <div className="mb-3">
                <h4
                  className="text-white"
                  style={{ fontSize: "1rem", letterSpacing: ".1rem" }}
                >
                  HELP
                </h4>
              </div>

              <ul
                className="text-left text-white "
                style={{ listStyleType: "none", padding: 0, margin: 0 }}
              >
                <li className="text-left">Help Center</li>
                <li className="text-left">Twitter</li>
                <li className="text-left">Facebook</li>
                <li className="text-left">Coronavirus</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        style={{ width: "100vw", background: "#1C1E21" }}
        className="d-flex text-white p-3 px-5 justify-content-between"
      >
        <div>2022 © WhatsApp LLC</div>
        <div>Privacy & Terms</div>
      </div>
    </>
  );
};

export default Footer;

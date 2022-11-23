import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-5" style={{ width: "100vw" }}>
      <div className=" mx-auto">
        <h1>Welcome to your dashboard!</h1>
        <Container className="my-5">
          <Row>
            <Col sm={12} md={4} className="mt-3">
              <Link
                to="/search"
                className="navlink text-white text-decoration-none"
              >
                <div
                  style={{
                    borderRadius: "100px",
                    background: "#118C7E",
                    fontSize: "1.7rem",
                    fontWeight: "bold",
                    textAlign: "center",
                    height: "14rem",
                  }}
                  className="text-white p-5"
                >
                  Search for users
                  <div className="pt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      fill="currentColor"
                      className="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </div>
                </div>
              </Link>
            </Col>
            <Col sm={12} md={4} className="mt-3">
              <Link
                to="/chat"
                className="navlink text-white text-decoration-none"
              >
                <div
                  style={{
                    borderRadius: "100px",
                    background: "#118C7E",
                    fontSize: "1.7rem",
                    fontWeight: "bold",
                    textAlign: "center",
                    height: "14rem",
                  }}
                  className="text-white p-5"
                >
                  Return to your last chat!
                  <div className="pt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      fill="currentColor"
                      className="bi bi-chat-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
                    </svg>
                  </div>
                </div>
              </Link>
            </Col>
            <Col sm={12} md={4} className="mt-3">
              <Link
                to="/profile"
                className="navlink text-white text-decoration-none"
              >
                <div
                  style={{
                    borderRadius: "100px",
                    background: "#118C7E",
                    fontSize: "1.7rem",
                    fontWeight: "bold",
                    textAlign: "center",
                    height: "14rem",
                  }}
                  className="text-white p-5"
                >
                  Profile Settings
                  <div className="pt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      fill="currentColor"
                      className="bi bi-person-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
                    </svg>
                  </div>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;

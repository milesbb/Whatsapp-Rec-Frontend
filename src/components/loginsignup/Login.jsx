import { useState } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfileInfo } from "../../redux/actions/profileActions";

const Login = ({ setLoggedIn, loggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorOccurred, setErrorOccurred] = useState(false);
  const [postSuccess, setPostSuccess] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerAuthor = async () => {
    try {
      setPostSuccess(false);
      setErrorOccurred(false);
      setLoading(true);

      const loggingInAuthor = {
        email: email,
        password: password,
      };

      const config = {
        method: "POST",
        body: JSON.stringify(loggingInAuthor),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      };

      dispatch(getProfileInfo(config, setLoading, setErrorOccurred));

      navigate("/home");
    } catch (error) {
      setErrorOccurred(true);
    } finally {
      setLoading(false);
      setEmail("");
      setPassword("");
      infoTimeoutFunc(3000);
    }
  };

  const resetAllState = () => {
    setErrorOccurred(false);
    setPostSuccess(false);
    setLoading(false);
  };

  const infoTimeoutFunc = (time) => {
    const infoTimeout = setTimeout(resetAllState, time);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password && !loading && !errorOccurred && !postSuccess) {
      registerAuthor();
    } else {
      setErrorOccurred(true);
      infoTimeoutFunc(2000);
    }
  };

  return (
    <div className="p-5" style={{ height: "85vh", width: "100vw" }}>
      <div className="w-50 mx-auto">
        <h2 className="my-4">Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="my-4" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>

          {loading && <Spinner animation="border" role="status"></Spinner>}
          {!loading && errorOccurred && (
            <Alert variant="danger">Error logging in, try again!</Alert>
          )}
          {!loading && !errorOccurred && postSuccess && (
            <Alert variant="success">Login successful!</Alert>
          )}
          <Button variant="secondary" type="submit" className="my-4">
            Login
          </Button>
          <div className="mt-4">
            <Link to="/signup" className="text-dark">
              ...or create an account!
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;

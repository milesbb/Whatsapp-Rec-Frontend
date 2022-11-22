import { Button, Form } from "react-bootstrap";

const Login = () => {
  return (
    <div className="p-5" style={{ height: "85vh", width: "100vw" }}>
      <div className="w-50 mx-auto">
        <h2 className="my-4">Login</h2>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="my-4" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="secondary" type="submit" className="my-4">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;

import { useState } from "react";
import { Button, Container, FormControl, InputGroup } from "react-bootstrap";

const ChatMain = () => {
  const [newMessage, setNewMessage] = useState("");
  return (
    <div className="" style={{ height: "80vh", width: "100vw" }}>
      <div className="d-flex">
        <div className="w-75">
          <div className="w-100 mx-auto">
            <Container
              style={{
                boxShadow: "inset 5px 5px 15px 5px rgba(0,0,0,0.23)",
                height: "75vh",
              }}
              className="overflow-auto"
            ></Container>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Type a message!"
                aria-label="Message"
                aria-describedby="basic-addon2"
                value={newMessage}
                onChange={(e) => {
                  setNewMessage(e.target.value);
                }}
              />

              <Button variant="outline-secondary" style={{borderRadius: "0"}}>Send</Button>
            </InputGroup>
          </div>
        </div>
        <div
          style={{ boxShadow: "-2px 2px 15px -4px #000000", height: "80vh" }}
          className="w-25 overflow-auto"
        >
          <h2 className="pt-1">Added participants</h2>
          <Container className="mt-4"></Container>
        </div>
      </div>
    </div>
  );
};

export default ChatMain;

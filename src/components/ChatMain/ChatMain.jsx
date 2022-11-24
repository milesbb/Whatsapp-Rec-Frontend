import { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Image,
  InputGroup,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { handleSocketConnect, socket } from "../../socket";
import { io } from "socket.io-client";

const ChatMain = () => {
  const [newMessages, setNewMessages] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => {
    return state.loadedProfile.currentUser;
  });

  const activeChat = useSelector((state) => {
    return state.loadedProfile.activeChat;
  });

  const onlineUsers = useSelector((state) => {
    return state.loadedProfile.onlineUsers;
  });

  const attemptedRecipients = useSelector((state) => {
    return state.loadedProfile.attemptChat;
  });

  const sendMessage = () => {
    console.log("triggered send message");
    const newMessage = {
      text: message,
      sender: currentUser.username,
      timestamp: new Date(),
    };

    socket.emit("sendMessage", newMessage);

    setNewMessages([...newMessages, newMessage]);
    setMessage("");
    console.log("Messages in convo:", newMessages);
  };

  useEffect(() => {
    const socket = io(process.env.REACT_APP_BE_URL, {
      transports: ["websocket"],
    });

    socket.connect(); //Connects user

    handleSocketConnect(
      socket,
      currentUser,
      attemptedRecipients,
      setNewMessages,
      dispatch
    );
  }, []);

  useEffect(() => {
    return () => {
      socket.removeAllListeners();
      socket.disconnect();
    };
  }, []);

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
            >
              {activeChat !== null &&
                activeChat.messages.map((message, i) => {
                  <Row key={i}>
                    <Col>{message.sender}</Col>
                    <Col>
                      {message.content.text && <p>{message.content.text}</p>}
                      {message.content.media && (
                        <Image src={message.content.media} />
                      )}
                    </Col>
                    <Col>{message.createdAt}</Col>
                  </Row>;
                })}
            </Container>

            <Form
              className="mb-3"
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
            >
              <FormControl
                placeholder="Type a message!"
                aria-label="Message"
                aria-describedby="basic-addon2"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </Form>
          </div>
        </div>
        <div
          style={{ boxShadow: "-2px 2px 15px -4px #000000", height: "80vh" }}
          className="w-25 overflow-auto"
        >
          <h2 className="pt-1">Added participants</h2>
          <Container className="mt-4"> 
     
            {/* {activeChat !== null &&
              activeChat.members.map((member) => (
                <Row key={member._id}>
                  <Col><Image src={member.avatar} /></Col>
                  <Col>{member.username}</Col>
                  <Col>{onlineUsers.}</Col>
                </Row>
              ))} */}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default ChatMain;

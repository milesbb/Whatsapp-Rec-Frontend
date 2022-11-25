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
import { handleSocketConnect } from "../../socket";
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";
import { loadChat } from "../../redux/actions/profileActions";
import { formatDistance } from "date-fns";

export const socket = io(process.env.REACT_APP_BE_URL, {
  transports: ["websocket"],
});

const ChatMain = () => {
  const [newMessages, setNewMessages] = useState([]);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUser = useSelector((state) => {
    return state.loadedProfile.currentUser;
  });

  if (currentUser === null) {
    navigate("/");
  }

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
      sender: currentUser.username,
      content: { text: message },
      timestamp: new Date(),
    };
    socket.emit("sendMessage", newMessage);

    setNewMessages([...newMessages, newMessage]);
    setMessage("");

    dispatch(loadChat(activeChat._id));
    console.log("Messages in convo:", newMessages);
  };

  useEffect(() => {
    socket.connect(); //Connects user

    handleSocketConnect(
      socket,
      currentUser,
      attemptedRecipients,
      setNewMessages,
      activeChat,
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
                activeChat.messages.length !== 0 &&
                activeChat.messages.map((message, i) => {
                  return (
                    <Row key={i}>
                      <Col>{message.sender}</Col>
                      <Col>
                        {message.content.text && <p>{message.content.text}</p>}
                        {/* {message.content.media && (
                        <Image src={message.content.media} />
                      )} */}
                      </Col>
                      <Col>
                        {formatDistance(
                          new Date(message.timestamp),
                          new Date(),
                          {
                            addSuffix: true,
                          }
                        )}
                      </Col>
                      <hr></hr>
                    </Row>
                  );
                })}
              {newMessages.length !== 0 &&
                newMessages.map((message, i) => {
                  return (
                    <Row key={i}>
                      <Col>{message.sender}</Col>
                      <Col>
                        {message.content.text && <p>{message.content.text}</p>}
                        {/* {message.content.media !== undefined && message.content. && (
                        <Image src={message.content.media} />
                      )} */}
                      </Col>
                      <Col>
                        {formatDistance(
                          new Date(message.timestamp),
                          new Date(),
                          {
                            addSuffix: true,
                          }
                        )}
                      </Col>
                      <hr></hr>
                    </Row>
                  );
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
            <Row className="px-3">
              <Button
                variant="danger"
                onClick={() => {
                    console.log("User disconnect")
                  socket.removeAllListeners();
                  socket.disconnect();
                }}
              >
                Disconnect
              </Button>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default ChatMain;

import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";

const socket = io(process.env.REACT_APP_BE_URL, { transports: ["websocket"] });

const ChatMain = () => {
  const [newMessages, setNewMessages] = useState("");
  const [onlineUsersList, setOnlineUsers] = useState([]);
  const [message, setMessage] = useState("");

  const currentUser = useSelector((state) => {
    return state.loadedProfile.currentUser;
  });

  const attemptedRecipients = useSelector((state) => {
    return state.loadedProfile.attemptChat;
  });

  const sendMessage = () => {
    const newMessage = {
      text: message,
      sender: currentUser.username,
      timestamp: new Date(),
    };

    socket.emit("sendMessage", newMessage);

    setNewMessages([...newMessages, newMessage]);
    setMessage("");
  };

  useEffect(() => {
    socket.connect()
    const userDetailsObject = {
      username: currentUser.username,
      _id: currentUser._id,
    };
    
    console.log("User connected")

    socket.on("signedIn", (OnlineUsers) => {
      setOnlineUsers(OnlineUsers);

      socket.on("newConnection", (onlineUsersList) => {
        setOnlineUsers(onlineUsersList);
      });

      socket.emit("checkChats", attemptedRecipients);

      socket.on("errorCheckingChats", (error) => {
        console.log(error)
      })

      socket.on("existingChat", (chatIds) => {
        console.log("Chat existing")
        // LOAD CHAT WITH HTTP REQUEST

        const newChatId = "";

        socket.emit("openChat", newChatId);
      });

      socket.on("noExistingChat", (chats) => {
        console.log("No chat existing")
        // CREATE CHAT WITH HTTP REQUEST

        const newChatId = "";

        socket.emit("openChat", newChatId);
      });


      socket.on("newMessage", (receivedMessage) => {
        setNewMessages((newMessages) => [
          ...newMessages,
          receivedMessage.message,
        ]);

        console.log("DID ME sentMessage");
      });
    });
  }, []);

  useEffect(() => {
    return () => {
      socket.removeAllListeners();
      socket.disconnect()
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
            ></Container>

            <Form
              className="mb-3"
              onSubmit={(e) => {
                e.preventDefault();
                console.log("form triggered");
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
          <Container className="mt-4"></Container>
        </div>
      </div>
    </div>
  );
};

export default ChatMain;

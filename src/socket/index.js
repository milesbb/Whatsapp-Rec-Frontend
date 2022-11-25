// import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { createChat, loadChat } from "../redux/actions/profileActions";

// export const socket = io(process.env.REACT_APP_BE_URL, {
//   transports: ["websocket"],
// });

export const handleSocketConnect = (
  socket,
  currentUser,
  attemptedRecipients,
  setNewMessages,
  dispatch
) => {
  const userDetailsObject = {
    username: currentUser.username,
    _id: currentUser._id,
  };

  console.log("User connected");

  socket.on("signedIn", (OnlineUsers) => {
    dispatch({ type: "SET_ONLINE_USERS", payload: OnlineUsers });

    console.log("chat check stage");

    // socket.emit("checkChats", attemptedRecipients);

    socket.on("errorCheckingChats", (error) => {
      console.log("Error checking chats:", error);
    });

    socket.on("existingChat", (chatId) => {
      console.log("Chat existing");
      // LOAD CHAT WITH HTTP REQUEST

      dispatch(loadChat(chatId));
      console.log("Chat ID:", chatId);

      socket.emit("openChat", chatId);
    });

    socket.on("noExistingChat", (chats) => {
      console.log("No chat existing");
      // CREATE CHAT WITH HTTP REQUEST

      const newChatId = dispatch(createChat(attemptedRecipients));

      socket.emit("openChat", newChatId);
    });

    socket.on("newMessage", (receivedMessage) => {
      setNewMessages((newMessages) => [
        ...newMessages,
        receivedMessage.message,
      ]);

      console.log("DID ME sentMessage");
    });
    socket.on("newConnection", (onlineUsersList) => {
      dispatch({ type: "SET_ONLINE_USERS", payload: onlineUsersList });
    });
  });
};

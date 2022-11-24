import {
  ATTEMPT_CHAT,
  SEARCH_USERS,
  SET_ACTIVE_CHAT,
  SET_CHATS,
  SET_ONLINE_USERS,
  SET_USER_INFO,
} from "../actions/profileActions";

const initialState = {
  currentUser: null, //contains current logged in user info object
  attemptChat: [], // array of string id's of users attempting to start chat
  activeChat: null, // currently active chat room
  chatList: [], // list of chats user is a part of
  allUsers: [], // object array of all users in DB
  onlineUsers: [],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        currentUser: action.payload,
      };
    case SEARCH_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };
    case ATTEMPT_CHAT:
      return {
        ...state,
        attemptChat: action.payload,
      };
    case SET_ACTIVE_CHAT:
      return {
        ...state,
        activeChat: action.payload,
      };
    case SET_CHATS:
      return {
        ...state,
        chatList: action.payload,
      };
    case SET_ONLINE_USERS:
      return {
        ...state,
        onlineUsers: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;

import {
  ATTEMPT_CHAT,
  SEARCH_USERS,
  SET_USER_INFO,
} from "../actions/profileActions";

const initialState = {
  currentUser: null,
  chats: {
    active: "",
    list: [],
  },
  allUsers: [],
  attemptChat: [],
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
    default:
      return state;
  }
};

export default profileReducer;

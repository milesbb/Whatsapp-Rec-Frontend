import { SEARCH_USERS, SET_USER_INFO } from "../actions/profileActions";

const initialState = {
  currentUser: null,
  chats: {
    active: "",
    list: [],
  },
  allUsers: [],
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
    default:
      return state;
  }
};

export default profileReducer;

import { SET_USER_INFO } from "../actions/profileActions";


const initialState = {
  currentUser: null,
  chats: {
    active: "",
    list: [],
  },
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default profileReducer;

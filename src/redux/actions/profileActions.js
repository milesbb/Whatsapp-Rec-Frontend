import { useNavigate } from "react-router-dom";

export const SET_USER_INFO = "SET_USER_INFO";
export const SEARCH_USERS = "SEARCH_USERS";
export const SET_CHATS = "SET_CHATS";
export const SET_ACTIVE_CHAT = "SET_ACTIVE_CHAT";
export const SET_HISTORY = "SET_HISTORY";
export const NEW_MESSAGE = "NEW_MESSAGE";
export const ATTEMPT_CHAT = "ATTEMPT_CHAT"

export const getProfileInfo = (config, setLoading, setError) => {
  return async (dispatch, getState) => {
    try {
      const url = process.env.REACT_APP_BE_URL + "/users/session";
      const response = await fetch(url, config);

      if (response.ok) {
        const tokens = await response.json();

        localStorage.setItem("accessToken", tokens.accessToken);
        localStorage.setItem("refreshToken", tokens.refreshToken);

        dispatch({
          type: SET_USER_INFO,
          payload: tokens.user,
        });
      } else {
        setError(true);
      }
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
};

export const searchUsers = (searchString) => {
  return async (dispatch, getState) => {
    try {
      const config = {
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        }),
      };

      let url = "";
      if (searchString === "") {
        url = process.env.REACT_APP_BE_URL + "/users";
      } else {
        url = process.env.REACT_APP_BE_URL + "/users?search=" + searchString;
      }

      const response = await fetch(url, config);

      if (response.ok) {
        const allUsers = await response.json();

        dispatch({
          type: SEARCH_USERS,
          payload: allUsers,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const logoutUser = (user) => {
  return async (dispatch, getState) => {
    try {
      const config = {
        method: "DELETE",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        }),
      };

      const url = process.env.REACT_APP_BE_URL + "/users/session";

      const response = await fetch(url, config);

      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");

      dispatch({
        type: SET_USER_INFO,
        payload: null,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// export const getUserChats = (userId) => {
//     return async (dispatch, getState) => {
//       try {
//         const config = {
//           headers: new Headers({
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//           }),
//         };
  
//         const url = process.env.REACT_APP_BE_URL + "/users/session";
  
//         const response = await fetch(url, config);
  
//         localStorage.removeItem("accessToken");
//         localStorage.removeItem("refreshToken");
  
//         dispatch({
//           type: SET_USER_INFO,
//           payload: null,
//         });
//       } catch (error) {
//         console.log(error);
//       }
//     };
//   };

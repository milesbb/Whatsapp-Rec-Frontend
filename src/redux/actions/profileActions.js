export const SET_USER_INFO = "SET_USER_INFO";
export const SET_CHATS = "SET_CHATS";
export const SET_ACTIVE_CHAT = "SET_ACTIVE_CHAT";
export const SET_HISTORY = "SET_HISTORY";
export const NEW_MESSAGE = "NEW_MESSAGE";

export const getProfileInfo = (config, setLoading, setError) => {
  return async (dispatch, getState) => {
    try {
        const url = process.env.REACT_APP_BE_URL + "/users/session"
        console.log(url)
      const response = await fetch(
        url,
        config
      );

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

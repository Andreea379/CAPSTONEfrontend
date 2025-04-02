export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginRequest = () => ({
  type: LOGIN_REQUEST
});
export const loginSuccess = (jwt) => ({
  type: LOGIN_SUCCESS,
  payload: jwt
});
export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error
});
export const fetchLogin = (login, navigate) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await fetch("http://localhost:8080/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(login)
    });

    if (response.ok) {
      const loginResponse = await response.json();

      dispatch(
        loginSuccess({
          token: loginResponse.token,
          userId: loginResponse.id,
          email: loginResponse.email,
          roles: loginResponse.roles,
          profileId: loginResponse.profileId
        })
      );
      localStorage.setItem("token", loginResponse.token);
      localStorage.setItem("userId", loginResponse.id);
      localStorage.setItem("profileId", loginResponse.profileId);
      localStorage.setItem("loggedIn", JSON.stringify(true));
      console.log("Token set in localStorage:", loginResponse.token);
      console.log("UserId set in localStorage:", loginResponse.id);
      navigate("/home");
      console.log("Login Response:", loginResponse);
    } else {
      throw new Error("Login Failed!");
    }
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

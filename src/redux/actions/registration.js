export const REGISTER_USER_REQUEST = "REGISTER_USER_REQUEST";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

export const registerUserRequest = () => ({
  type: REGISTER_USER_REQUEST
});

export const registerUserSuccess = (user) => ({
  type: REGISTER_USER_SUCCESS,
  payload: user
});

export const registerUserFailure = (error) => ({
  type: REGISTER_USER_FAILURE,
  payload: error
});

export const registerUser = (userData, avatar) => async (dispatch) => {
  dispatch(registerUserRequest());

  //   console.log(userData);

  const formData = new FormData();
  formData.append(
    "user",
    new Blob([JSON.stringify(userData)], { type: "application/json" })
  );
  formData.append("avatar", avatar);

  try {
    const response = await fetch("http://localhost:8080/user/registration", {
      method: "POST",
      body: formData
    });
    console.log();

    if (response.ok) {
      const registration = await response.json();
      console.log("Registration response:", registration);
      dispatch(registerUserSuccess(registration));
      console.log(registration);
    } else {
      throw new Error("Registration Failed!");
    }
  } catch (error) {
    dispatch(registerUserFailure(error.message));
  }
};

// import { useNavigate } from "react-router-dom";

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

export const registerUser = (userData, navigate) => async (dispatch) => {
  dispatch(registerUserRequest());
  const formData = new FormData();
  formData.append(
    "user",
    new Blob([JSON.stringify(userData)], { type: "application/json" })
  );

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
      navigate("/login");
    } else {
      throw new Error("Registration Failed!");
    }
  } catch (error) {
    dispatch(registerUserFailure(error.message));
  }
};

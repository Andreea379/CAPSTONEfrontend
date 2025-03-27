export const PROFILE_REQUEST = "PROFILE_REQUEST";
export const PROFILE_SUCCESS = "PROFILE_SUCCESS";
export const PROFILE_FAILURE = "PROFILE_FAILURE";

export const profileRequest = () => ({
  type: PROFILE_REQUEST
});

export const profileSuccess = (profiles) => ({
  type: PROFILE_SUCCESS,
  payload: profiles
});

export const profileFailure = (error) => ({
  type: PROFILE_FAILURE,
  payload: error
});

export const fetchProfile = () => async (dispatch) => {
  dispatch(profileRequest());
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  console.log(userId);
  console.log(token);
  try {
    const response = await fetch(`http://localhost:8080/profile/${userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    if (!response.ok) {
      console.log("response not ok");
    }
    if (response.ok) {
      const profile = await response.json();
      console.log("Profile loading response:", profile);
      dispatch(
        profileSuccess({
          profileId: profile.id,
          firstName: profile.firstName,
          lastName: profile.lastName,
          profession: profile.profession,
          description: profile.description,
          article: profile.article
        })
      );
      localStorage.setItem("profileId", profile.id);
      console.log(profile.id);
      console.log(profile);
    } else {
      throw new Error("User profiles loading failed!");
    }
  } catch (error) {
    dispatch(profileFailure(error.message));
  }
};
export const UPDATE_PROFILE_REQUEST = "UPDATE_PROFILE_REQUEST";
export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";
export const UPDATE_PROFILE_FAILURE = "UPDATE_PROFILE_FAILURE";

export const updateProfileRequest = () => ({
  type: UPDATE_PROFILE_REQUEST
});

export const updateProfileSuccess = (updateProfile) => ({
  type: UPDATE_PROFILE_SUCCESS,
  payload: updateProfile
});

export const updateProfileFailure = (error) => ({
  type: UPDATE_PROFILE_FAILURE,
  payload: error
});

export const updateProfile =
  (profileData, profileImage, navigate) => async (dispatch) => {
    dispatch(updateProfileRequest());
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    console.log(token);
    console.log(userId);

    if (!token) {
      console.log("No token found. Please log in first.");
      navigate("/login");
    }

    const formData = new FormData();
    formData.append(
      "profile",
      new Blob([JSON.stringify(profileData)], { type: "application/json" })
    );
    formData.append("profileImage", profileImage);

    console.log(formData);
    try {
      const response = await fetch(
        `http://localhost:8080/profile/update/${userId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`
          },
          body: formData
        }
      );
      console.log(token);

      if (response.ok) {
        const profileUpdate = await response.json();
        console.log("Profile update response:", profileUpdate);
        dispatch(updateProfileSuccess(profileUpdate));
        navigate("/profile");
        console.log(profileUpdate);
      } else {
        throw new Error("Profile update Failed!");
      }
    } catch (error) {
      dispatch(updateProfileFailure(error.message));
    }
  };

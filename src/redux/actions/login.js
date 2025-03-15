export const LOGIN = "LOGIN";

export const checkLogin = (jwt) => ({
  type: LOGIN,
  payload: jwt
});

export const fetchLogin = (login) => {
  return async (dispatch) => {
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
        console.log(loginResponse.token);
        dispatch(checkLogin(loginResponse.token));
      } else {
        console.log("Errore nel login dell'utente");
        return null;
      }
    } catch (error) {
      console.log("Errore nel login dell'utente", error);
      return null;
    }
  };
};

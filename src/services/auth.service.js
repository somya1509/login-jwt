import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

//registration for new user
const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

//logins into the portal
const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

//logout of the session
const logout = () => {
  localStorage.removeItem("user");
};

//function gets stored user information (including JWT)
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default { register, login, logout, getCurrentUser };

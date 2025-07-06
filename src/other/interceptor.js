import axios from "axios";

import router from '../router'

// axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Access-Control-Allow-Methods"] =
  "GET,HEAD,OPTIONS,POST,PUT";

axios.interceptors.request.use(
  function (config) {

    if (
      config.url.includes("public") ||
      config.url.includes("login") ||
      config.url.includes("logout")
    ) {
      config.headers.Authorization = "";
    } else {
      const user = localStorage.getItem("user");
      const token = user ? JSON.parse(user).token : null;


      if (token) {
        try {
          if (token) {
            config.headers.Authorization = `Bearer ${token}`; 
            console.warn("Token is undefined or null");
          }
        } catch (error) {
          console.error("Error parsing user data from localStorage:", error);

        }
      } else {
        console.warn("No user data found in localStorage");
      }
    }

  

    console.log("Request Headers:", config.headers); 
    return config;
  },
  function (error) {

    alert(error);

    console.error("Error in request:", error);
    alert("An error occurred while making the request."); 
  }
);


axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {

      localStorage.removeItem("user");

            var loader = document.getElementById("loader");
            loader.style.visibility = "hidden";




      router.push({ name: 'login' }) 
    }
    return Promise.reject(error)
  }
)
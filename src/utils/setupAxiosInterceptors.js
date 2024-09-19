import axios from "axios";

const setupAxiosInterceptors = () => {
  axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response && error.response.status === 401 && window.location.pathname != "/") {
        console.log(window.location.pathname);
        alert("Session Expired, Please login again");
        localStorage.removeItem("token");
        setTimeout(() => {
          window.location.replace("/");
        }, 100); // Small delay before redirecting
      }
      return Promise.reject(error);
    }
  );
};

export default setupAxiosInterceptors;

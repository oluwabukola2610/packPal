/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ContextProvider = createContext();

const PackpalContext = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!user.name || !user.email || !user.password) {
      toast.error("Please fill in all fields");
      return;
    }

    if (user.password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    axios
      .post("https://packpal-api.onrender.com/api/v1/users/register", {
        name: user.name,
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log("Registration successful");
          toast.success("Registration successful");
          sessionStorage.setItem("user", JSON.stringify(user.name));
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } 
      })
      .catch((error) => {
        if (error.response.status === 400) {
          toast.error("User already exists");
        }
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!user.email || !user.password) {
      toast.error("Please fill in all fields");
      return;
    }

    if (user.password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    axios
      .post("https://packpal-api.onrender.com/api/v1/users/login", {
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        if (response.status === 200) {
          const data = response.data.data;
          console.log(data.token);
          localStorage.setItem("Token", data.token);
          toast.success("Login successful");
          setTimeout(() => {
            navigate("/packpal");
          }, 2000);
          return;
        }
      })
      .catch((error) => {
        toast.error("Wrong details");
        console.error(error.message);
      });
  };

  const contextValue = {
    user,
    setUser,
    handleLogin,
    handleRegister,
  };

  return (
    <ContextProvider.Provider value={contextValue}>
      {children}
    </ContextProvider.Provider>
  );
};

export default PackpalContext;

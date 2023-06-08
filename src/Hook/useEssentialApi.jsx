import { useEffect, useState } from "react";
import axios from "axios";

const useEssentialApi = () => {
  const [inputText, setInputText] = useState("");
  const [essentials, setEssentials] = useState([]);

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const fetchEssentials = () => {
    const token = localStorage.getItem("Token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .get("https://packpal-api.onrender.com/api/v1/essentials/all", {
        headers,
      })
      .then((response) => {
        const data = response.data.data;
        setEssentials(data.essentials || []);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAddEssentials = (e) => {
    e.preventDefault();

    if (inputText.trim() === "") {
      return;
    }
    const newEssential = { essentials: inputText };
    setEssentials([...essentials, newEssential]);
    setInputText("");
    const token = localStorage.getItem("Token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .post(
        "https://packpal-api.onrender.com/api/v1/essentials/add",
        { newEssential },
        { headers }
      )
      .catch((error) => {
        console.error(error);
      });
  };
  
  useEffect(() => {
    fetchEssentials();
  }, []);
  return {
    essentials,
    inputText,
    handleInput,
    handleAddEssentials,
  };
};

export default useEssentialApi;

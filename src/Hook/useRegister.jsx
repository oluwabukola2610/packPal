
import { useContext, useState } from "react";
import { ContextProvider } from "../context/PackpalContext";
const useRegister = () => {

 const {user,setUser} = useContext(ContextProvider)
 
  const handleInput = (event)=>{
    const {name,value} = event.target
    setUser({
    ...user,
    [name]:value

    })
  }

  
  
 
  const [passwordType, setPasswordType] = useState("password");

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };










  return {togglePassword, passwordType,handleInput,user,setUser}
}

export default useRegister
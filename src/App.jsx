import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Signup from "./page/Signup";
import Login from "./page/Login";
import Packpal from "./page/Packpal";
import PackpalContext from "./context/PackpalContext";

const App = () => {
  return (
    <PackpalContext>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/packpal" element={<Packpal />} />
      </Routes>
    </PackpalContext>
  );
};

export default App;

import image from "../assets/Image.png";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useRegister from "../Hook/useRegister";
import { useContext } from "react";
import { ContextProvider } from "../context/PackpalContext";

const Register = () => {
  const { togglePassword, passwordType, handleInput } = useRegister();
  const { handleRegister, user } = useContext(ContextProvider);
  
  return (
    <div className="max-w-[1640px] flex md:flex-row flex-col h-screen bg-gradient-to-tr from-rose-100 to-purple-800 justify-center items-center">
      <div className="w-full md:w-2/3 lg:w-[36%] m-auto bg-white/30 p-5 rounded-xl  backdrop-filter backdrop-blur-xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-1">Create an Account</h1>
          <p className="text-gray-600">Sign up to join PackPal</p>
        </div>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label
              className="block text-gray-800 text-sm font-extrabold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3  bg-gray-100 text-gray-700 leading-tight focus:outline-none "
              id="name"
              name="name"
              type="text"
              value={user.name}
              placeholder="Enter your name"
              onChange={handleInput}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-800 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3  bg-gray-100 text-gray-700 leading-tight focus:outline-none "
              id="email"
              type="email"
              placeholder="Enter your email"
              value={user.email}
              name="email"
              onChange={handleInput}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="flex items-center justify-between bg-gray-100 ">
              <input
                type={passwordType}
                name="password"
                id="password"
                value={user.password}
                onChange={handleInput}
                placeholder="••••••••"
                className="appearance-none border rounded w-full py-2 px-3  bg-gray-100 text-gray-700 leading-tight focus:outline-none "
              />
              <div onClick={togglePassword} className="px-4 text-black">
                {passwordType === "password" ? (
                  <AiFillEyeInvisible size={20} />
                ) : (
                  <AiFillEye size={20} />
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4  bg-gray-100 "
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="remember" className="text-gray-600">
                  Remember me
                </label>
              </div>
            </div>
            <a
              href="/"
              className="text-sm font-bold text-gray-700 hover:underline"
            >
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full my-4 text-white  focus:outline-none font-bold rounded-xl text-md px-5 py-2.5 text-center hover:bg-purple-600/80 bg-purple-600 hover:duration-300 focus:shadow-outline"
          >
            Sign up
          </button>
          <p className="text-sm font-medium text-gray-500 inline-block align-baseline">
            Already have an account ?{" "}
            <Link
              to="/login"
              className="font-bold text-md hover:underline  hover:text-purple-500/80 text-purple-500 hover:duration-300"
            >
              Log in
            </Link>
          </p>
        </form>
        <ToastContainer
          position="top-center"
          hideProgressBar={true}
          newestOnTop={false}
          autoClose={1000}
          rtl={false}
          draggable
          style={{
            top: "10%",
            transform: "translateY(-50%)",
            width: "fit-content",
          }}
        />
      </div>
      <div className="hidden lg:flex ">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-[600px] h-[600px]"
        />
      </div>
    </div>
  );
};

export default Register;

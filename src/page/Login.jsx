import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import useRegister from "../Hook/useRegister";

import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { ContextProvider } from "../context/PackpalContext";
const Login = () => {
  const { togglePassword, passwordType, handleInput } = useRegister();
  const { user, handleLogin } = useContext(ContextProvider);

  return (
    <div
      className=" max-w-[1640px] bg-cover min-h-screen w-full flex justify-center items-center object-center object-cover bg-fixed"
      style={{
        backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/010/554/556/original/glassmorphism-abstract-gradient-shapes-blurred-gradient-iilustration-glass-morphism-style-neon-gradient-vector.jpg"
          )`,
      }}
    >
      <div className="w-full md:w-2/3 lg:max-w-[45%] bg-white/50 p-5 rounded-xl  backdrop-filter backdrop-blur-xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-1">Welcome back</h1>
          <p className="text-gray-700">
            Please sign in to your PackPal account
          </p>
        </div>{" "}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              className="block text-gray-800 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none border rounded bg-gray-100 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none shadow-sm"
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
            <div className="flex items-center justify-between bg-gray-100 rounded-md shadow-sm">
              <input
                type={passwordType}
                name="password"
                id="password"
                value={user.password}
                onChange={handleInput}
                placeholder="••••••••"
                className="appearance-none  bg-gray-100 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
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
                <label htmlFor="remember" className="text-gray-300">
                  Remember me
                </label>
              </div>
            </div>
            <a
              href="/"
              className="text-sm font-bold text-gray-800 hover:underline"
            >
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full my-4 text-white  focus:outline-none font-bold rounded-xl text-md px-5 py-2.5 text-center hover:bg-purple-600/60 bg-purple-600 hover:duration-300 focus:shadow-outline"
          >
            Sign in
          </button>
        </form>
        <ToastContainer
          position="top-center"
          hideProgressBar={true}
          newestOnTop={false}
          autoClose={3000}
          closeOnClick
          rtl={false}
          draggable
          style={{ top: "10%", transform: "translateY(-50%)" }}
        />
      </div>
    </div>
  );
};

export default Login;

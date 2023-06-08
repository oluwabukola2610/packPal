import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const navigateToSignUp = () => {
    navigate("/signup");
  };

  const welcomeAnimation = {
    initial: { opacity: 0, y: -100},
    animate: { opacity: 1, y: 0 },
  };

  const buttonAnimation = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={welcomeAnimation}
      transition={{ duration: 1 }}
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80")',
      }}
    >
      <div className="w-full max-w-[39rem] px-8 py-16 text-white shadow-xl">
        <motion.div
          className="bg-black/60 p-8 rounded-xl"
          whileHover="hover"
          variants={buttonAnimation}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-100">
            Welcome to <span className="text-purple-400">PackPal!</span>
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-200">
            PackPal is a handy app that helps you keep track of your travel
            essentials. Stay organized and never forget an important item again!
          </p>
          <div className="flex justify-center ">
          <button
            className="mt-8 px-4 py-2 font-bold text-lg hover:bg-purple-600/60 bg-gradient-to-tl from-purple-700 to-pink-300 hover:duration-300 focus:shadow-outline text-white rounded-lg  transition-all"
            onClick={navigateToSignUp}
          >
            Get Started
          </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;

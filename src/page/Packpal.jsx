import { useContext } from "react";
import { ContextProvider } from "../context/PackpalContext";
import useEssentialApi from "../Hook/useEssentialApi";
import RenderedData from "../component/RenderedData";

const Packpal = () => {
  const { handleLogout } = useContext(ContextProvider);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const { essentials, handleInput, handleAddEssentials, inputText } =
    useEssentialApi();

  return (
    <header className="mx-auto max-w-[1640px]">
      <div className="max-h-[600px] relative">
        {/* overlay */}
        <div className="absolute w-full h-full  max-h-[320px] bg-gradient-to-tr from-black/80 to-purple-600/20 flex flex-col justify-center items-center">
          {user && (
            <div className="welcome-animation text-2xl text-gray-300 font-bold absolute left-4 top-8 md:left-10">
              <span className="">Welcome {user}</span>
            </div>
          )}
          <div className="mt-20 max-w-[40rem] py-3 px-6 w-full flex flex-col absolute top-0 md:left-[5rem] lg:left-[20rem]">
            <div className="flex justify-between w-full py-4">
              <h1 className="font-extrabold text-3xl text-white italic ">
                Packpal
              </h1>
              <button
                type="button"
                onClick={handleLogout}
                className="inline-block px-4 py-3 font-bold text-center text-white uppercase  rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs"
              >
                Log out
              </button>
            </div>
            <form
              onSubmit={handleAddEssentials}
              className="my-5 flex items-center  w-full bg-gray-100 p-2 rounded-lg"
            >
              <button
                type="submit"
                className="inline-block px-4 py-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 text-xs  active:opacity-80"
              >
                Add
              </button>
              <input
                className="ml-2 p-3 text-xl text-gray-600 bg-gray-100 appearance-none rounded-lg focus:outline-none w-full"
                type="text"
                value={inputText}
                placeholder="Enter your essentials"
                onChange={handleInput}
              />
            </form>
            <div className="space-y-2 rounded-md shadow-md">
              {essentials.map((data, index) => (
                <RenderedData key={index} data={data} />
              ))}
            </div>
          </div>
        </div>
        <img
          className="w-full max-h-[320px] object-cover"
          alt=""
          src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
        />
      </div>
    </header>
  );
};

export default Packpal;

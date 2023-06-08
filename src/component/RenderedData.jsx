/* eslint-disable react/prop-types */
import { FaTrash,  FaCheckCircle, FaRegCircle } from "react-icons/fa";

const RenderedData = ({ data }) => {
  return (
    <section
      className={`flex items-center ${
        data.completed ? "line-through " : ""
      } bg-gray-50 p-4 w-full  justify-between shadow-md hover:bg-gray-200/90 z-10 rounded-md `}
    >
      <div className="flex space-x-4">
        <button>
          {data.completed ? (
            <FaCheckCircle size={25}  />
          ) : (
            <FaRegCircle size={25} />
          )}
        </button>
        <h1 className="text-xl text-gray-600">{data.essentials}</h1>
      </div>
      <button>
        <FaTrash size={18} className="text-red-900"/>
      </button>
    </section>
  );
};

export default RenderedData;

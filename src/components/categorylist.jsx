import React from "react";
import { Link } from "react-router-dom";

const categorylist = ({ category }) => {
  return (
    <Link to={`category/${category.value}`}>
      <div class="isolate text-white bg-gradient-to-r from-purple-100 via-purple-200 to-purple-200 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2  m-1 aspect-video w-44  md:w-52 h-14  border   flex justify-center items-center  cursor-pointer uppercase hover:bg-white/15 hover:shadow-md hover:text-gray-500  bg-black/5  ring-1 ">
        <p className="text-gray-800">{category.value}</p>
      </div>
    </Link>
  );
};

export default categorylist;

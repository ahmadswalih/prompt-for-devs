import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Prompts } from "../components";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [prompts, setPrompts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const promptsPerPage = 6;

  useEffect(() => {
    fetch(`/data/${categoryName}.json`)
      .then((response) => response.json())
      .then((data) => setPrompts(data))
      .catch((error) =>
        console.error("Error fetching or parsing data:", error)
      );
  }, [categoryName]);

  const indexOfLastPrompt = currentPage * promptsPerPage;
  const indexOfFirstPrompt = indexOfLastPrompt - promptsPerPage;
  const currentPrompts = prompts.slice(indexOfFirstPrompt, indexOfLastPrompt);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="text-black items-center   flex mx-auto my-auto flex-col justify-center mt-16">
      <Link to="/">
        <p className="text-sm bg-purple-500 cursor-pointer text-white p-2 mb-3 border border-purple-400 rounded-lg">
          Back to Home page
        </p>
      </Link>
      <p className=" text-3xl md:text-4xl text-center ">
        Popular Prompts for : <br />{" "}
        <span className="font-bold">{categoryName}</span>
      </p>
      <div className="mt-10">
        {currentPrompts.map((value) => (
          <Prompts key={value.id} prompt={value.value} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {Array.from(
          { length: Math.ceil(prompts.length / promptsPerPage) },
          (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className="mx-1 px-3 py-1 mb-10 bg-gray-300 hover:bg-gray-400 focus:outline-none rounded"
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default CategoryPage;

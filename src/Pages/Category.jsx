import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Prompts } from "../components";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [prompt, setPrompts] = useState([]);

  useEffect(() => {
    fetch(`/data/${categoryName}.json`)
      .then((response) => response.json())
      .then((data) => setPrompts(data))
      .catch((error) =>
        console.error("Error fetching or parsing data:", error)
      );
  }, [categoryName]);

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
      {console.log(prompt)}
      <div className="mt-10">
        {prompt.map((value) => {
          // console.log(value);
          return <Prompts key={value.id} prompt={value.value} />;
        })}
      </div>
    </div>
  );
};

export default CategoryPage;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Prompts } from "../components";

const CategoryPage = () => {
  const categoryName = useParams();
  const [prompt, setPrompts] = useState([]);
  useEffect(() => {
    fetch(`../data/${categoryName.categoryName}.json`)
      .then((response) => {
        console.log(response.json());
        response.json();
      }) // Parse the JSON data
      .then((data) => {
        console.log(data);
        setPrompts(data);
      })
      .catch((error) => console.error("Error fetching prompts:", error));
  }, [categoryName]);

  return (
    <div className="text-black items-center  flex mx-auto my-auto flex-col justify-center mt-16">
      <p className=" text-3xl md:text-4xl text-center ">
        Popular Prompts for : <br />{" "}
        <span className="font-bold">{categoryName.categoryName}</span>
      </p>
      <div className="mt-10">
        {prompt.map((value) => {
          console.log(value);
          return <Prompts key={value.id} prompt={value.value} />;
        })}
      </div>
    </div>
  );
};

export default CategoryPage;

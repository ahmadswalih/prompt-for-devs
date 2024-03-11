import React, { useEffect, useState } from "react";
import { CategoryList } from "../components";
import logo from "../assets/logo.png";

const HomePage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`/data/categories.json`)
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) =>
        console.error("Error fetching or parsing data:", error)
      );
  }, []);

  return (
    <div className="text-white items-center  flex mx-auto my-auto flex-col justify-center mt-10  md:mt-16">
      <img src={logo} alt="logo" className=" w-60 md:w-[25rem]" srcset="" />
      <p className="text-purple-800 text-lg bg-white/70 border p-2 w-96 md:w-fit text-center border-gray-200 shadow-sm rounded-md   mb-10">
        Click on any of the below category to get the prompts.
      </p>
      <div className="grid grid-cols-2  md:grid-cols-4  items-center justify-center   gap-4">
        {categories.map((value) => (
          <CategoryList key={value.id} category={value} />
        ))}
      </div>
      <p className=" w-96 md:w-[60rem] mb-10 mt-10 bg-purple-200  border border-gray-400 hover:shadow-md rounded-md p-4  text-gray-900 ">
        The application is designed to assist developers and developer advocates
        in gaining a comprehensive understanding of prompt generation within the
        AI domain. As AI utilization becomes increasingly prevalent, optimizing
        prompt creation stands as a paramount strategy for achieving competitive
        advantage in the market. This platform endeavors to furnish users with
        insights into prompt efficacy, thereby empowering them to refine their
        prompt formulation strategies for enhanced performance and efficacy in
        the evolving landscape of AI technologies.
        <br /> <br />
        The Entire Data for the application is scraped from the internet and The
        Application is entirely Opensource including the data.So feel free to
        contribute
      </p>
      <a target="_blank" href="https://github.com/ahmadswalih/prompt-for-devs">
        {" "}
        <p className="text-gray-800 mb-5 bg-white p-3 border border-gray-500 shadow-md rounded-md ">
          GITHUB ↗
        </p>
      </a>
      <a target="_blank" href="https://ahmadswalih.com">
        {" "}
        <p className="text-gray-800 mb-10">© ahmadswalih.com</p>
      </a>
    </div>
  );
};

export default HomePage;

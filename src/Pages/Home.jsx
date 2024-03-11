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
    <div className="text-white items-center  flex mx-auto my-auto flex-col justify-center mt-16">
      <img src={logo} alt="logo" className=" w-60 md:w-[25rem]" srcset="" />

      <div className="grid grid-cols-2  md:grid-cols-4  items-center justify-center   gap-4">
        {categories.map((value) => (
          <CategoryList key={value.id} category={value} />
        ))}
      </div>
      <p className="w-[60rem] mb-10 mt-10 bg-purple-200  border border-gray-400 hover:shadow-md rounded-md p-4  text-black ">
        The application is designed to assist developers and developer advocates
        in gaining a comprehensive understanding of prompt generation within the
        AI domain. As AI utilization becomes increasingly prevalent, optimizing
        prompt creation stands as a paramount strategy for achieving competitive
        advantage in the market. This platform endeavors to furnish users with
        insights into prompt efficacy, thereby empowering them to refine their
        prompt formulation strategies for enhanced performance and efficacy in
        the evolving landscape of AI technologies.
      </p>
      <p>analytics</p>
    </div>
  );
};

export default HomePage;

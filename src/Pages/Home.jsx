import React, { useEffect, useState } from "react";
import { CategoryList } from "../components";
import logo from "../assets/logo.png";
import categoryData from "../data/categories.json";

const HomePage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Set categories when component mounts
    setCategories(categoryData);
  }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    <div className="text-white items-center  flex mx-auto my-auto flex-col justify-center mt-16">
      <img src={logo} alt="logo" className=" w-60 md:w-[25rem]" srcset="" />
      <div className="grid grid-cols-2  md:grid-cols-4  items-center justify-center   gap-4">
        {categories.map((value) => (
          <CategoryList key={value.id} category={value} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

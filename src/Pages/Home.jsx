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
    </div>
  );
};

export default HomePage;

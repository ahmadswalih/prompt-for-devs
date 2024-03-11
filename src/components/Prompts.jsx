import React from "react";
import copytoClipboardImage from "../assets/copytoclipboard.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Prompts = ({ prompt }) => {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      toast.success("Copied to clipboard", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeButton: false,
        className: "toast-success",
      });
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };
  return (
    <div className="bg-purple-300 p-4 mb-10 w-[44rem]  rounded-md flex flex-col text-black hover:shadow-md border border-purple-500 ">
      <p>{prompt}</p>
      <button
        className="relative bottom-0 items-end justify-end flex right-0 m-2 text-white hover:text-gray-300"
        onClick={copyToClipboard}
      >
        <img src={copytoClipboardImage} className="w-4" alt="" />
      </button>
      <ToastContainer />
    </div>
  );
};

export default Prompts;

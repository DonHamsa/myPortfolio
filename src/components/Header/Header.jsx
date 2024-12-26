"use client";
import { useState } from "react";

const pdfURL = "http://localhost:3000/cv.pdf";

export default function Nav() {
  const [activeIndex, setActiveIndex] = useState(null); // Track the active item index

  // Handle click event to set active index
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const downloadFileAtURL = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div className="flex lg:justify-between justify-center  bg-blue ml-[30px] mr-[30px] ">
      <div></div>
      <div className="flex flex-row justify-between w-[340px] bg-[#EDE9E9] h-[45px] items-center rounded-[19px] pl-[4px] pr-[4px] mt-0 pt-[3px] pb-[3px] text-[14px] font-custom">
        {["About", "Projects", "Blogs"].map((item, index) => (
          <p
            key={index}
            onClick={() => handleClick(index)} // Update active index on click
            className={`flex-grow text-center h-full flex items-center justify-center transition-all duration-300 rounded-[19px] cursor-pointer
             ${index === 0 && !activeIndex && "bg-white"} ${
              activeIndex === index
                ? "bg-white text-black"
                : "bg-transparent text-black hover:bg-gray-200"
            }`} // Apply styles based on activeIndex
          >
            {item}
          </p>
        ))}
      </div>
      <div className="lg:items-center lg:flex hidden cursor-pointer relative right-[10%]" onClick={()=> downloadFileAtURL(pdfURL)}>CV</div>
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pdfURL = "https://donhamsaportfolio.vercel.app/cv.pdf";

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(null);
  const pathName = usePathname();

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (pathName) {
      {
        pathName === "/"
          ? setActiveIndex(0)
          : pathName === "/projects"
          ? setActiveIndex(1)
          : setActiveIndex(2);
      }
    }
  }, [pathName]);

  return (
    <div className="flex lg:justify-between justify-center  bg-blue ml-[30px] mr-[30px] ">
      <div></div>
      <div className="flex flex-row justify-between w-[340px] bg-[#EDE9E9] h-[45px] items-center rounded-[19px] pl-[4px] pr-[4px] mt-0 pt-[3px] pb-[3px] text-[14px] font-custom gap-5 ">
        {["About", "Projects", "Blogs"].map((item, index) => (
          <Link
            href={
              item === "About"
                ? "/"
                : item === "Projects"
                ? "/projects"
                : "/blogs"
            }
            className=" h-full flex flex-grow "
            key={index}
          >
            <p
              onClick={() => handleClick(index)} // Update active index on click
              className={`flex-grow text-center h-full flex items-center justify-center rounded-[19px] cursor-pointer
             ${
               activeIndex === index
                 ? "bg-white text-black"
                 : "bg-transparent text-black hover:bg-gray-200"
             }`} // Apply styles based on activeIndex
            >
              {item}
            </p>
          </Link>
        ))}
      </div>
      <Link
        href="https://donhamsaportfolio.vercel.app/cv.pdf"
        className="lg:items-center lg:flex hidden cursor-pointer relative right-[10%]"
      >
        <div>CV</div>
      </Link>
    </div>
  );
}

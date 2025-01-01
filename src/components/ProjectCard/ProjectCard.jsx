import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

export default function ProjectCard({
  projectImage,
  stack,
  projectName,
  description,
  link
}) {
  return (
    <div className=" group rounded-[30px] grid grid-cols-2 p-[20px] bg-white h-[300px] lg:w-[500px] w-[350px]  gap-7  hover:shadow-xl transition-shadow duration-200">
      <div className="flex-col h-[100%]">
        <div className="h-[85%] flex items-center justify-center ">
          <img
            src={projectImage}
            className="w-[full] h-[auto] rounded-[5%] border border-gray-50"
          ></img>
        </div>
        <div className="relative h-[15%] flex flex-col justify-end">
          <Link href={link}>
            <div className=" relative group-hover:w-[130px] flex flex-start items-center  transition-all duration-500 bg-[#d0d4db] h-[40px] w-[40px]  rounded-full cursor-pointer overflow-hidden">
              <div className=" flex items-center justify-center w-[100%] h-[100%] group-hover:w-[30%]">
                <MdArrowOutward className="w-[17px] h-[17px] relative text-black " />
              </div>
              <p className=" absolute right-[0] left-[24%] group-hover:opacity-100 opacity-0  text-black w-max text-[13px]">
                Visit Website
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="grid grid-rows-[15%_70%_15%] ">
        <div className="font-bold pt-[10px] text-[23px]">{projectName}</div>
        <div className="lg:text-[12px] text-[10px] font-techStack text-gray-500 pt-[30px]">
          {description}
        </div>
        <div className="flex w-[100%] gap-4 ">
          {stack.map((stack, index) => {
            return (
              <img src={stack} key={index} className="mr-[5px] h-[30px] "></img>
            );
          })}
        </div>
      </div>
    </div>
  );
}

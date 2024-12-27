import { MdArrowOutward } from "react-icons/md";

export default function ProjectCard({
  projectImage,
  stack,
  projectName,
  description,
}) {
  return (
    <div className="rounded-[30px] grid grid-cols-2 p-[20px] bg-white h-[300px] w-[500px] gap-7  hover:shadow-xl transition-shadow duration-200">
      <div className="flex-col h-[100%]">
        <div className="h-[85%] flex items-center justify-center ">
          <img
            src={projectImage}
            className="w-[full] h-[auto] rounded-[5%] border border-gray-50"
          ></img>
        </div>
        <div className="h-[15%] flex flex-col justify-end">
          <div className="flex items-center justify-center bg-[#d0d4db] h-[40px] w-[40px] p-[5px] rounded-[50%] cursor-pointer">
            <MdArrowOutward className="w-[15px] h-[15px] text-black" />
          </div>
        </div>
      </div>
      <div className="grid grid-rows-[15%_70%_15%] ">
        <div className="font-bold pt-[10px] text-[23px]">{projectName}</div>
        <div className="text-[12px] font-techStack text-gray-500 pt-[30px]">
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

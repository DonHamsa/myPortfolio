import { MdComputer}  from "react-icons/md";
import { FaCogs } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaAws } from "react-icons/fa";

export default function Techstack() {
  return (
    <div className=" lg:col-span-1 lg:row rounded-[30px]  lg:p-2 pt-[25px] pl-[12px] pr-[12px] flex flex-col   items-center justify-center lg:row-span-2 bg-[#ede8e8] lg:space-y-4 h-full lg:h-auto  gap-y-[20px] lg:gap-y-[5px]">
      <p className="font-techStack font-extrabold text-black text-[18px] ">
        Tech Stack
      </p>
      <div className=" outline outline-[#f3f4f6] rounded-[30px] h-max  text-[10px] p-[16px]  w-[100%]  ">
        <div className="flex items-center justify-center border">
          <MdComputer className="w-[17px] h-[17px] text-gray-400 mr-[5px]"/>
          <p className="text-[#94A3B8] mb-[13px] lg:mb-0">Languages and frameworks</p>
        </div>
        <div className="flex flex-wrap space-y-[7px]  items-end space-x-[3px] ">
          <div className="bg-[#f2f5f6] p-[5px] text-[black] rounded-full h-max ">
            Typescript
          </div>
          <div className="bg-[#f2f5f6] p-[5px] text-[black] rounded-full">
            JavaScript
          </div>
          <div className="bg-[#f2f5f6] p-[5px] text-[black] rounded-full">
            NodeJS
          </div>
          <div className="bg-[#f2f5f6] p-[5px] text-[black] rounded-full">
            NextJs
          </div>
          <div className="bg-[#f2f5f6] p-[5px] text-[black] rounded-full">
            React
          </div>
          <div className="bg-[#f2f5f6] p-[5px] text-[black] rounded-full">
            Python
          </div>
          <div className="bg-[#f2f5f6] p-[5px] text-[black] rounded-full">
            Tailwind
          </div>
          <div className="bg-[#f2f5f6] p-[5px] text-[black] rounded-full">
            CSS
          </div>
          <div className="bg-[#f2f5f6] p-[5px] text-[black] rounded-full">
            C
          </div>
          <div className="bg-[#f2f5f6] p-[5px] text-[black] rounded-full">
            Vitest
          </div>
          <div className="bg-[#f2f5f6] p-[5px] text-[black] rounded-full">
            Playwright
          </div>
        </div>
      </div>

      <div className=" outline outline-[#f3f4f6] rounded-[25px] h-max text-[10px] p-[16px]  w-[100%]  ">
        <div className="flex items-center">
          <FaCogs className='mr-[6px] h-[17px] w-[17px] text-gray-300'/>
          <p className="text-[#94A3B8]">DevOps</p>
        </div>
        <div className="flex flex-wrap space-y-[7px] items-end space-x-[3px]">
          <div className="bg-[#f2f5f6] p-[5px] text-[black] rounded-full h-max ">
            Docker
          </div>
          <div className="bg-[#f2f5f6] p-[5px] text-[black] rounded-full">
            {" "}
            Git
          </div>
          <div className="bg-[#f2f5f6] p-[5px] text-[black] rounded-full">
            Terraform
          </div>
        </div>
      </div>

      <div className=" outline outline-[#f3f4f6] rounded-[25px] h-max text-[10px] p-[16px]   w-[100%] ">
        <div className="flex items-center mb-[7px]">
          <FaDatabase className="mr-[7px] h-[17px] w-[17px] text-gray-300"/>
          <p className="text-[#94A3B8]">Data Storage</p>
        </div>
        <div className="flex flex-wrap space-y-[7px] items-end  space-x-[3px]">
          <div className="bg-[#f2f5f6] p-[5px] text-[black] rounded-full h-max ">
            SQL
          </div>
        </div>
      </div>

      <div className=" outline outline-[#f3f4f6] rounded-[25px] h-max text-[10px] p-[16px]  w-[100%]  ">
        <div className="flex items-center">
          <FaAws className="h-[17px] w-[17px] mr-[7px] text-gray-300"/>
          <p className="text-[#94A3B8]">AWS</p>
        </div>
        <div className="flex flex-wrap space-y-[7px] items-end space-x-[3px]">
          <div className="bg-[#f2f5f6] p-[5px] text-[black] rounded-full h-max ">
            S3
          </div>
          <div className="bg-[#f2f5f6] p-[5px] text-[black] rounded-full h-max ">
            Lambda functions
          </div>
        </div>
      </div>

      <div></div>
      <div></div>
    </div>
  );
}

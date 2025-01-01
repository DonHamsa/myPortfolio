export default function Techstack() {
  return (
    <div className=" lg:col-span-1 lg:row rounded-[30px]  lg:p-2 p-9 flex flex-col   items-center justify-center lg:row-span-2 bg-gradient-to-br from-[#1c2b43] to-black lg:space-y-4 h-full lg:h-auto  gap-y-[20px]">
      <p className="font-techStack font-extrabold text-white text-[18px] ">
        Tech Stack
      </p>
      <div className="bg-[rgb(15,23,42)] rounded-[30px] h-max  text-[10px] p-[16px] bg-gradient-to-br from-[#1c2b43] to-black w-[100%]  ">
        <div className="flex items-center">
          <img src="/comp.png" className="w-[17px] h-[17px] mr-[8px] " />
          <p className="text-[#94A3B8]">Programming languages and frameworks</p>
        </div>
        <div className="flex flex-wrap space-y-[7px]  items-end space-x-[3px] ">
          <div className="bg-[rgba(45,212,191,0.1)] p-[5px] text-teal-400  rounded-full h-max ">
            Typescript
          </div>
          <div className="bg-[rgba(45,212,191,0.1)] p-[5px] text-teal-400  rounded-full">
            JavaScript
          </div>
          <div className="bg-[rgba(45,212,191,0.1)] p-[5px] text-teal-400  rounded-full">
            NodeJS
          </div>
          <div className="bg-[rgba(45,212,191,0.1)] p-[5px] text-teal-400  rounded-full">
            NextJs
          </div>
          <div className="bg-[rgba(45,212,191,0.1)] p-[5px] text-teal-400  rounded-full">
            React
          </div>
          <div className="bg-[rgba(45,212,191,0.1)] p-[5px] text-teal-400  rounded-full">
            Python
          </div>
          <div className="bg-[rgba(45,212,191,0.1)] p-[5px] text-teal-400  rounded-full">
            Tailwind
          </div>
          <div className="bg-[rgba(45,212,191,0.1)] p-[5px] text-teal-400  rounded-full">
            CSS
          </div>
          <div className="bg-[rgba(45,212,191,0.1)] p-[5px] text-teal-400  rounded-full">
            C
          </div>
          <div className="bg-[rgba(45,212,191,0.1)] p-[5px] text-teal-400  rounded-full">
            Vitest
          </div>
          <div className="bg-[rgba(45,212,191,0.1)] p-[5px] text-teal-400  rounded-full">
            Playwright
          </div>
        </div>
      </div>

      <div className="bg-[rgb(15,23,42)] rounded-[25px] h-max text-[10px] p-[16px] bg-gradient-to-br from-[#1c2b43] to-black w-[100%]  ">
        <div className="flex items-center">
          <img src="/devops.png" className="w-[17px] h-[17px] mr-[8px] " />
          <p className="text-[#94A3B8]">DevOps</p>
        </div>
        <div className="flex flex-wrap space-y-[7px] items-end space-x-[3px]">
          <div className="bg-[rgba(45,212,191,0.1)] p-[5px] text-teal-400  rounded-full h-max ">
            Docker
          </div>
          <div className="bg-[rgba(45,212,191,0.1)] p-[5px] text-teal-400  rounded-full">
            {" "}
            Git
          </div>
          <div className="bg-[rgba(45,212,191,0.1)] p-[5px] text-teal-400  rounded-full">
            Terraform
          </div>
        </div>
      </div>

      <div className="bg-[rgb(15,23,42)] rounded-[25px] h-max text-[10px] p-[16px] bg-gradient-to-br from-[#1c2b43] to-black  w-[100%] ">
        <div className="flex items-center">
          <img
            src="/database.png"
            className="w-[17px] h-[17px] mr-[8px] mb-[4px] "
          />
          <p className="text-[#94A3B8]">Data Storage</p>
        </div>
        <div className="flex flex-wrap space-y-[7px] items-end  space-x-[3px]">
          <div className="bg-[rgba(45,212,191,0.1)] p-[5px] text-teal-400  rounded-full h-max ">
            SQL
          </div>
        </div>
      </div>

      <div className="bg-[rgb(15,23,42)] rounded-[25px] h-max text-[10px] p-[16px] bg-gradient-to-br from-[#1c2b43] to-black w-[100%]  ">
        <div className="flex items-center">
          <img src="/cloud.png" className="w-[17px] h-[17px] mr-[8px] " />
          <p className="text-[#94A3B8]">AWS</p>
        </div>
        <div className="flex flex-wrap space-y-[7px] items-end space-x-[3px]">
          <div className="bg-[rgba(45,212,191,0.1)] p-[5px] text-teal-400  rounded-full h-max ">
            S3
          </div>
          <div className="bg-[rgba(45,212,191,0.1)] p-[5px] text-teal-400  rounded-full h-max ">
            Lambda functions
          </div>
        </div>
      </div>

      <div></div>
      <div></div>
    </div>
  );
}

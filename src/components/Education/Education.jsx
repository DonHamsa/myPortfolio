import { IoSchoolOutline } from "react-icons/io5";

export default function Education() {
  return (
    <div className="rounded-[40px] border-4  flex flex-col  bg-[rgb(24,24,27)] text-[9px] p-7  border-white">
      <div className="flex mb-[29px]">
        <IoSchoolOutline className="w-[17px] h-[17px] text-gray-400 mr-[6px] " />
        <p className="text-white text-[13px]">Education</p>
      </div>


      <div className="flex mt-[10px]  items-center mb-[2px] ">
        <div className="rounded-[50%] border p-[3px] w-max h-max bg-[rgb(39,39,42)] mr-[7px]">
          <img src="/soc.png" className="h-[18px] w-[21px] "></img>
        </div>
        <div className="grid grid-cols-1  w-[90%] ">
          <p className="text-white">School of Code</p>
          <div className="flex justify-between  ">
            <p className="text-gray-400">Software Trainee </p>
            <p className="text-gray-400">2024</p>
          </div>
        </div>
      </div>

      <div className="flex mt-[10px]  items-center mb-[4px] ">
        <div className="rounded-[50%] border p-[3px] w-max h-max bg-[rgb(39,39,42)] mr-[7px]">
          <img src="/warwick.png" className="h-[18px] w-[21px] "></img>
        </div>
        <div className="grid grid-cols-1  w-[90%] ">
          <p className="text-white">Warwick University</p>
          <div className="flex justify-between  ">
            <p className="text-gray-400">Law Student </p>
            <p className="text-gray-400">2020-23</p>
          </div>
        </div>
      </div>


      <div className="flex mt-[10px]  items-center  mb-[4px]">
        <div className="rounded-[50%] border p-[3px] w-max h-max bg-[rgb(39,39,42)] mr-[7px]">
          <img src="/bishops.jpeg" className="h-[18px] w-[21px] "></img>
        </div>
        <div className="grid grid-cols-1  w-[90%] ">
          <p className="text-white">Warwick University</p>
          <div className="flex justify-between  ">
            <p className="text-gray-400">A Level Student </p>
            <p className="text-gray-400">2017-20</p>
          </div>
        </div>
      </div>


    </div>
  );
}

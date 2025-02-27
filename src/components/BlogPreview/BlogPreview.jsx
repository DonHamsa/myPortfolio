import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

export default function BlogPreview({ heading, synopsis, date, href }) {
  return (
    <div className="p-[50px] lg:w-[500px] w-[350px] rounded-[30px] bg-white h-auto">
      <h2 className="font-Morango text-[18px] mb-[5px]">{heading}</h2>
      <p className=" lg:text-[15px] mb-[35px] text-gray-500 font-lightCustom">
        {synopsis}
      </p>
      <div className="flex justify-between items-center ">
        <Link
          className="p-[7px] rounded-[30px] border flex justify-center items-center cursor-pointer "
          href={href}
        >
          <MdArrowOutward className="h-[15px] w-[15px] mr-[5px]" />
          <p className="text-[12px]">Read More</p>
        </Link>
        <p className=" text-[13px] text-gray-400">{date}</p>
      </div>
    </div>
  );
}

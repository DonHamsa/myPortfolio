import { RxCross1 } from "react-icons/rx";
import Link from "next/link";

export default function PostTemplate({ title, children, date }) {
  return (
    <div className="p-[0_27%] absolute top-0 left-[0] bg-[#f7f2f2]">
      <div className="flex justify-center cursor-pointer mb-[100px] hover:mb-[120px] transition-all duration-300">
        <Link className="rounded-full bg-[#ece9e8] p-[20px] w-max  mt-[20px]" href='/blogs'>
          <RxCross1 />
        </Link>
      </div>
      <h1 className="font-Morango text-[30px] mb-[20px] ">{title}</h1>

      <div className=" font-lightCustom rounded-[20px] text-[13px] mb-[20px] bg-[#ece9e8] w-max p-[10px]">
        <p>{date}</p>
      </div>

      <div className="font-lightCustom leading-8 mb-[50px]">{children}</div>
    </div>
  );
}

import { MdArrowOutward } from "react-icons/md";


export default function BlogPreview({heading, synopsis, date}){
  return(
    <div className='p-[50px] w-[500px] rounded-[30px] bg-white'>
      <h2 className="font-Morango text-[18px] mb-[5px]">{heading}</h2>
      <p className=" text-[13px] mb-[35px] text-gray-500">{synopsis}</p>
      <div className="flex justify-between items-center ">
        <div className="p-[7px] rounded-[30px] border flex justify-center items-center cursor-pointer">
          <MdArrowOutward className="h-[15px] w-[15px] mr-[5px]"/>
          <p className="text-[12px]">Read More</p>
        </div>

        <p className=' text-[13px] text-gray-400'>{date}</p>

      </div>

    </div>
  )
}
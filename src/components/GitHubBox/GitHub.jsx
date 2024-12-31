import { FaGithub } from "react-icons/fa";


export default function GitHubBox(){
  return (
    <div className="lg:h-[100%]  w-[100%] rounded-[30px] overflow-hidden h-[100px]  bg-black "  >
      <a href='https://github.com/DonHamsa '  className='h-full w-full flex justify-center items-center '>
      < FaGithub className='text-white text-4xl'/>
      </a>
    </div>
  )
}
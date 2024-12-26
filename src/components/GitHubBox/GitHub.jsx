import { FaGithub } from "react-icons/fa";


export default function GitHubBox(){
  return (
    <div className="h-[100%] w-full rounded-[40px] overflow-hidden  bg-black "  >
      <a href='https://github.com/DonHamsa '  className='h-full w-full flex justify-center items-center '>
      < FaGithub className='text-white text-4xl'/>
      </a>
    </div>
  )
}
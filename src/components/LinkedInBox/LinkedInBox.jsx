import { FaLinkedin } from "react-icons/fa";

export default function LinkedInBox() {
  return (
    <div className="bg-white w-[100%] rounded-[30px] lg:h-[100%] h-[204px]  flex justify-center items-center relative ">
      <a
        href="https://www.linkedin.com/in/hamsamuse/"
        className="h-full w-full flex justify-center items-center "
      >
        <FaLinkedin className="text-4xl" />
      </a>
    </div>
  );
}

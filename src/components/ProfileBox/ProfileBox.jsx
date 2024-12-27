export default function ProfileBox() {
  return (
    <div className="bg-white rounded-[30px]   flex flex-col  justify-center col-span-2 p-[35px] ">
      <p className=" text-[26px]  font-semibold">Hi, I'm Hamsa!</p>
      <p className="text-grey-300 mb-[10px] text-[15px] text-gray-400">
        {" "}
        Software Developer{" "}
      </p>
      <div className="flex mb-[10px] ">
        <p className="mr-[6px] bg-#F7F2F2 text-black rounded-15px text-[11px]  bg-gray-100 rounded-[40px] p-[8px]">
          Based in London
        </p>
        <p className="bg-#F7F2F2 text-black rounded-15px text-[11px]   bg-gray-100 rounded-[40px] p-[8px]">
          {" "}
          Open to Work
        </p>
      </div>
      <p className="text-grey text-[10px] text-gray-500">
        A passionate developer focused on creating intuitive and impactful web
        experiences. 
      </p>
      <p className="mt-[6px] text-grey text-[10px]  text-gray-500">
        Currently exploring new opportunities and always excited to collaborate
        on innovative projects that push the boundaries of what's possible on
        the web.
      </p>
    </div>
  );
}

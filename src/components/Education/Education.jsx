export default function Education() {
  return (
    <div className="relative bg-white rounded-[40px] border-2 flex flex-col row-span-2 p-[15px] after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-[50%] after:bg-gray-300 after:w-[1px]">
        <div className="border border-black rounded-[10px] text-[7px] w-max mr-[5px] mb-[40px] p-[10px]" >
          <h2>School of Code</h2>
          <small>2024</small>
          <p></p>
        </div>
        <div className="border border-black rounded-[10px] text-[7px] relative w-max left-[50%]  mb-[40px]  p-[10px] ml-[10px]">
          <h2>Warwick University</h2>
          <small>2020-2023</small>
          <p></p>
        </div>
        <div className="border border-black rounded-[10px] text-[7px] w-max  p-[10px]">
          <h2>Bishopshalt School</h2>
          <small>2017-2020</small>
          <p></p>
        </div>
    </div>
  );
}

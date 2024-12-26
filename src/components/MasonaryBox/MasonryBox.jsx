"use client";
import GitHubBox from "../GitHubBox/GitHub";
import LinkedInBox from "../LinkedInBox/LinkedInBox";
import ProfileImage from "../ProfileImage/ProfileImage";
import ProfileBox from "../ProfileBox/ProfileBox";
import Techstack from "../Techstack/Techstack";
import Education from "../Education/Education";

export default function MasonryBox() {
  const boxStyle =
    "bg-white rounded-[40px] border-2 p-2 flex flex-col items-center justify-center";

  return (
    <div className=" overflow-hidden grid grid-cols-4 auto-rows-[300px] gap-4 my-10 px-[10%] ">
      {Array.from({ length: 6 }, (_, i) =>
        i == 0 ? (
          <ProfileBox key={i} />
        ) : i == 1 ? (
          <ProfileImage key={i} />
        ) : i == 2 ? (
          <Techstack key={i} />
        ) : i === 3 ? (
          <GitHubBox key={i} />
        ) : i == 4 ? (
          <LinkedInBox key={i} />
        ) : i==5 ? <Education key={i}/> : (
          <div
            key={i}
            className={`${boxStyle} ${i === 6 ? "lg:col-span-2" : ""} ${
              i === 5 &&  ""
            }`}
          ></div>
        )
      )}
    </div>
  );
}

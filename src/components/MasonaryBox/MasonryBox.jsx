"use client";
import GitHubBox from "../GitHubBox/GitHub";
import LinkedInBox from "../LinkedInBox/LinkedInBox";
import ProfileImage from "../ProfileImage/ProfileImage";
import ProfileBox from "../ProfileBox/ProfileBox";
import Techstack from "../Techstack/Techstack";
import Education from "../Education/Education";

export default function MasonryBox() {
  const boxStyle =
    "bg-white rounded-[40px] border-2 lg:p-2  flex flex-col items-center justify-center ";

  return (
    <div className=" overflow-hidden grid lg:grid-cols-4 lg:auto-rows-[300px] gap-4 grid-cols-2 lg:p-0 pr-[7%] pl-[7%] ">
      {Array.from({ length: 6 }, (_, i) =>
        i == 0 ? (
          <ProfileBox key={i} />
        ) : i == 1 ? (
          <>
            <div className="border-red-500 space-y-10  ">
              <ProfileImage />
              <div className="lg:hidden border border-red-500 space-y-10">
                <Education />
                <LinkedInBox />
                <GitHubBox />
              </div>
            </div>
          </>
        ) : i == 2 ? (
          <Techstack key={i} />
        ) : i === 4 ? (
          <div className="hidden lg:block">
            <GitHubBox key={i} />
          </div>
        ) : i == 5 ? (
          <div className="hidden lg:block">
            <LinkedInBox key={i} />
          </div>
        ) : i == 3 ? (
          <div className="hidden lg:block">
            <Education key={i} />{" "}
          </div>
        ) : (
          <div
            key={i}
            className={`${boxStyle} ${i === 6 ? "lg:col-span-2" : ""} ${
              i === 5 && ""
            }`}
          ></div>
        )
      )}
    </div>
  );
}

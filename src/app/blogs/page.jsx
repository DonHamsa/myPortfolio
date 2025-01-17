import BlogPreview from "@/components/BlogPreview/BlogPreview";

export default function Blogs() {
  return (
    <>
     <div className="lg:pr-[25%] lg:pl-[25%]  pl-[7%] pr-[7%] flex justify-center mb-[20px] lg:h-[300px] h-[370px]  ">
        <BlogPreview
          heading="What even is Politics?"
          synopsis="Democracy should mean every one shuts up most of the time. The elected people doing the work of those who elected them.Brexit,Labour,Conservatives. The noise suggests we have dictators in charge...."
          date="17th Jan 2025"
          href="blogs/politics"
        />
      </div>
      <div className="lg:pr-[25%] lg:pl-[25%] mb-[20px] pl-[7%] pr-[7%] flex justify-center lg:h-[300px] h-[370px]  ">
        <BlogPreview
          heading="Why I went from hating to loving Apple"
          synopsis="I always feel a bit ashamed when I have to change an opinion. This is because there is a hint of pride with all of our opinions, a feeling of pity for those who are on the other side... "
          date="10th Jan 2025"
          href="/blogs/goodApple"
        />
      </div>
      <div className="lg:pr-[25%] lg:pl-[25%]  pl-[7%] pr-[7%] flex justify-center mb-[20px] lg:h-[300px]  h-[390px]  ">
        <BlogPreview
          heading="Why I am optimistic in my job hunt "
          synopsis="Rejection after rejection will make anyone doubt their ability, their self-speech about pushing forward regardless of what the email response reads. It is always easier said that done, with anything really...."
          date="31st Dec 2024"
          href="blogs/journey"
        />
      </div>
    </>
  );
}

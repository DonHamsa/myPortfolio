import BlogPreview from "@/components/BlogPreview/BlogPreview";

export default function Blogs() {
  return (
    <>
      <div className="lg:pr-[25%] lg:pl-[25%]  pl-[7%] pr-[7%] flex justify-center mb-[20px] ">
        <BlogPreview
          heading="Why I am optimistic in my job hunt "
          synopsis="Rejection after rejection will make anyone doubt their ability, their self-speech about pushing forward regardless of what the email response reads. It is always easier said that done, with anything really...."
          date="31st Dec 2024"
          href="blogs/journey"
        />
      </div>
      <div className="lg:pr-[25%] lg:pl-[25%] mb-[20px] pl-[7%] pr-[7%] flex justify-center ">
        <BlogPreview
          heading="People look left, but rarely look right "
          synopsis="Optimism and quick-thinking are skills that are applauded, you are praised for being decisive and determined. However, sometimes this can lead to misreading a situation, calling something for what it isn't."
          date="3rd Jan 2025"
          href="/blogs/beingReal"
        />
      </div>
    </>
  );
}

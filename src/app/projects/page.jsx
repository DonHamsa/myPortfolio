import ProjectCard from "@/components/ProjectCard/ProjectCard";

export default function Projects() {
  return (
    <div className="flex lg:grid lg:grid-cols-2 flex-col gap-5 justify-center items-center lg:p-0 pl-[10%] pr-[10%] ">
      <ProjectCard
        projectImage="/playpal.png"
        stack={["/stream.png", "/next.png", "supa.png"]}
        projectName="PlayPal"
        description="
An application that helps individuals, especially newcomers, easily find and connect with others interested in playing football."
        link="https://playpal-steel.vercel.app/"
      />
      <ProjectCard
        projectImage="/2048.jpg"
        stack={["/pygame.png", "/python.png"]}
        projectName="2048 "
        description="
 A fully functional clone of the 2048 game with core mechanics, including merging tiles,real-time score updates, move detection, and a final score display upon game over."
        link="https://github.com/DonHamsa/2048-game"
      />
    </div>
  );
}

import "boxicons/css/boxicons.min.css";
import HomeSectionAboutMe from "./HomeSectionAboutMe";
import HomeSectionSpline from "./HomeSectionSpline";
export default function Home() {
  return (
    <section className="min-h-[80dvh] backdrop-blur-xs bg-black-300/10 flex flex-row justify-center items-center">
      <HomeSectionAboutMe />
      <HomeSectionSpline />
    </section>
  );
}

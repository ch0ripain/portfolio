import "boxicons/css/boxicons.min.css";
import HomeSectionAboutMe from "./HomeSectionAboutMe";
import HomeSectionSpline from "./HomeSectionSpline";
export default function Home() {
  return (
    <section
      id="home"
      className="bg-black-300/10 flex min-h-[80dvh] flex-row items-center justify-center backdrop-blur-xs"
    >
      <HomeSectionAboutMe />
      <HomeSectionSpline />
    </section>
  );
}

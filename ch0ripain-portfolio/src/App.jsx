import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Home from "./components/Home/Home";
import VideoBackground from "./components/Home/VideoBackground/VideoBackground";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="no-scrollbar container mx-auto flex h-screen flex-col gap-y-8 overflow-auto scroll-smooth px-6 pt-6 pb-12 sm:px-12">
      <VideoBackground />
      <NavBar />
      <Home />
      <Skills />
      <Experience />
      <Education />
      <main></main>
    </div>
  );
}

export default App;

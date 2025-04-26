import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import VideoBackground from "./components/Home/VideoBackground";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="container mx-auto px-12 pt-6 pb-12 h-screen flex flex-col gap-y-5 overflow-auto no-scrollbar">
      <VideoBackground />
      <Header />
      <Home />
      <Skills />
      <Experience />
      <Education />
      <main></main>
    </div>
  );
}

export default App;

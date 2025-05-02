import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Home from "./components/Home/Home";
import YoshiModel from "./components/Model3D/YoshiModel";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skills";
import BackgroundGradient from "./components/common/BackgroundGradient";

function App() {
  return (
    <div
      id="scroller"
      className="container mx-auto flex h-screen flex-col overflow-auto scroll-smooth px-5 py-8 sm:px-12"
    >
      <YoshiModel />
      <BackgroundGradient />
      <NavBar />
      <main id="scroller-content" className="space-y-48 py-8">
        <Home />
        <Skills />
        <Experience />
        <Education />
      </main>
    </div>
  );
}

export default App;

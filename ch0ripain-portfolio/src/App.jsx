import { useEffect, useRef, useState } from "react";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Home from "./components/Home/Home";
import YoshiModel from "./components/Animations/YoshiModel";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skills";
import BackgroundGradient from "./components/Animations/BackgroundGradient";
import Shader from "./components/Animations/Shader";

function App() {
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const scrollerRef = useRef(null);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setScrollEnabled(true);
      return () => clearTimeout(timeout);
    }, 6000);
  }, []);
  return (
    <div
      ref={scrollerRef}
      id="scroller"
      className={`container mx-auto flex h-screen flex-col px-5 py-8 sm:px-12 ${scrollEnabled ? "overflow-auto scroll-smooth" : undefined}`}
    >
      <YoshiModel />
      {/* <BackgroundGradient /> */}
      <Shader ref={scrollerRef} />
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

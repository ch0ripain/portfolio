import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skills";
import BackgroundGradient from "./components/animations/BackgroundGradient";
function App() {
  return (
    <div className="container mx-auto flex h-screen flex-col overflow-auto scroll-smooth px-5 py-8 sm:px-12">
      <BackgroundGradient />
      <NavBar />
      <main className="space-y-48 py-8">
        <Home />
        <Skills />
        <Experience />
        <Education />
      </main>
    </div>
  );
}

export default App;

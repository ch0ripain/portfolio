import { useEffect } from "react";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Home from "./components/Home/Home";
import YoshiModel from "./components/Model3D/YoshiModel";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skills";
import BackgroundGradient from "./components/common/BackgroundGradient";

function App() {
  useEffect(() => {
    // Desactivar interacción y ocultar cursor
    document.body.classList.add("cursor-none");
    document.body.style.pointerEvents = "none";
    document.body.style.userSelect = "none";

    const timeout = setTimeout(() => {
      // Restaurar interacción y mostrar cursor
      document.body.classList.remove("cursor-none");
      document.body.style.pointerEvents = "auto";
      document.body.style.userSelect = "auto";

      // Agregar clases de Tailwind al contenedor de scroll
      document
        .getElementById("scroller")
        .classList.add("overflow-auto", "scroll-smooth");
    }, 6000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      id="scroller"
      className="container mx-auto flex h-screen flex-col px-5 py-8 sm:px-12"
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

import Header from "./components/Header/header";
import VideoBackground from "./components/Home/VideoBackground";

function App() {
  return (
    <div className="container mx-auto px-12 py-6 h-screen flex flex-col">
      <VideoBackground />
      <Header />
    </div>
  );
}

export default App;

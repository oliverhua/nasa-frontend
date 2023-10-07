import VideoCanva from "./pages/VideoCanva/VideoCanva";
import GamePlay from "./pages/GamePlay/GamePlay";
import Home from "./pages/Home";
import { Routes, Route, Outlet, Link, To } from "react-router-dom";
import { LevelProvider } from "@/contexts/LevelContext";

function App() {
  return (
    <LevelProvider>
      <Routes>
        <Route path="/" element={<NavigationButtons />}>
          <Route index element={<Home />} />
          <Route path="video/:videoName" element={<VideoCanva />} />
          <Route path="play" element={<GamePlay />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </LevelProvider>
  );
}
import { useNavigate } from "react-router-dom";

function NavigationButtons() {
  const navigate = useNavigate();

  const handleButtonClick = (path: To) => {
    navigate(path);
  };

  return (
    <>
      <Outlet />
      <div className="fixed inset-x-0 bottom-0 p-4 flex justify-end">
        <button
          onClick={() => handleButtonClick("/")}
          className="px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Home
        </button>
        <button
          onClick={() => handleButtonClick("/video/intro")}
          className="px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Video
        </button>
        <button
          onClick={() => handleButtonClick("/play")}
          className="px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Card
        </button>
      </div>
    </>
  );
}

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;

import VideoCanva from "./page/VideoCanva/VideoCanva";
import { Routes, Route, Outlet, Link, To } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationButtons />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="video" element={<VideoCanva />} />
        {/* Using path="*"" means "match anything", so this route
            acts like a catch-all for URLs that we don't have explicit
            routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
  // return <VideoCanva />;
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
      <div className="fixed inset-x-0 bottom-0 p-4 flex justify-center">
        <button
          onClick={() => handleButtonClick("/")}
          className="px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Home
        </button>
        <button
          onClick={() => handleButtonClick("/video")}
          className="px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Video
        </button>
        <button
          onClick={() => handleButtonClick("/card")}
          className="px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Card
        </button>
      </div>
    </>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/video">Video</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

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

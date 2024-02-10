import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Favorites from "./pages/Favorites";
import MovieDetails from "./pages/MovieDetails";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header>HEADER</header>

      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/favorites"} element={<Favorites />} />
        <Route path={"/details"} element={<MovieDetails />} />
        <Route path={"*"} element={<Homepage />} />
      </Routes>

      <footer>FOOTER</footer>
    </BrowserRouter>
  );
}

export default App;

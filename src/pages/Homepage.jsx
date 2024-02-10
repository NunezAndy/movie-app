import Slider from "../components/Slider/Slider"
import PopularMovies from "../components/PopularMovies/PopularMovies"
import "./css/styles.css";

export default function Homepage() {
  return (
    <div>
      <Slider />
      <PopularMovies />
    </div>
  )
}

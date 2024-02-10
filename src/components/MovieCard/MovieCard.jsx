import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie, height, width, borderRadius, cardStyle }) {
  const cardStyleObj = {
    backgroundImage: `url(${import.meta.env.VITE_API_BASE_IMAGE_URL}${
      movie?.poster_path
    })`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    height,
    width,
    borderRadius,
  };
  return (
    <Link to="./details" className={cardStyle}>
      <div style={cardStyleObj}>MovieCard</div>
    </Link>
  );
}

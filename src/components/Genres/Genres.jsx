import { useEffect, useState } from "react";
import axios from "axios";

export default function Genres( props ) {
  const { genreIds = []} = props;
  const [genreItems, setGenreItems] = useState([]);
  const genreBaseUrl = "https://api.themoviedb.org/3/genre/movie/list";
  useEffect(() => {
    axios(`${genreBaseUrl}?api_key=${import.meta.env.VITE_APP_API_KEY}`)
      .then((res) => {
        console.log(res.data.genres);
        setGenreItems(
          genreIds.map((item) =>
            res.data.genres.find((genre) => genre.id === item)
          )
        );
      })
      .catch((err) => console.log(err));
  }, [genreIds]);

  return (
    <>
    <p>Genres :&nbsp;</p>
      {genreItems.map((item) => {
        <p key={item.id}>{item.name}</p>;
      })}
    </>
  );
}

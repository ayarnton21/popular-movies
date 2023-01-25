import React, { useState } from "react";
import "../../globalStyles/tailwind.css";
import getMovies from "../../services/getMovies";
import { useQuery } from "react-query";
import Modal from "../../components/Modal";
import Heading from "../../components/Heading";
import Movies from "./Movies";
import WatchedMovies from "./WatchedMovies";
const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  const { isFetching } = useQuery("get-movies", () => getMovies(), {
    placeholderData: [],
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    onSuccess: (fetchedMovies) => {
      setMovies(fetchedMovies.results);
    },
  });

  console.log(movies);
  console.log(isOpen);

  const selectedMovie = movies.find((movie) => movie.id === selectedId);
  console.log(selectedMovie);

  return (
    <>
      <Heading className="flex justify-center" text="Movies" />

      <Heading text="Popular movies" subHeading />

      <Movies
        movies={movies}
        setSelectedId={setSelectedId}
        setIsOpen={setIsOpen}
      />

      {selectedMovie && (
        <Modal
          isOpen={isOpen}
          onClose={() => {
            setSelectedId("");
            setIsOpen((prev) => !prev);
          }}
          selectedMovie={selectedMovie}
        />
      )}
    </>
  );
};
export default HomePage;

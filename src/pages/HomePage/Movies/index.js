import React from "react";
import MovieCard from "./MovieCard";

const Movies = ({ movies, setSelectedId, setIsOpen }) => {
  return (
    <div className="flex w-full overflow-x-scroll cursor-all-scroll">
      {movies.map(({ original_title, poster_path, id }) => (
        <MovieCard
          setSelectedId={setSelectedId}
          id={id}
          title={original_title}
          imgPath={poster_path}
          openModal={() => {
            setIsOpen((prev) => !prev);
            setSelectedId(id);
          }}
        />
      ))}
    </div>
  );
};

export default Movies;

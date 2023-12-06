import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ myMovies }) => {
  console.log(myMovies);
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {myMovies?.map((item) => (
          <MovieCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;

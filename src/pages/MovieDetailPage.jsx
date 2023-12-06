import React from "react";
import { Link, useParams } from "react-router-dom";

const MovieDetailPage = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id.toString() === id);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-detail">
      <div className="trailer">
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <iframe
          width="560"
          height="315"
          src={movie.youtubeURL}
          title="Trailer"
        ></iframe>
      </div>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
};

export default MovieDetailPage;

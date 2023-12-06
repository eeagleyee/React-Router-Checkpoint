import { useState, useMemo, useEffect } from "react";
import { Spin } from "antd";
import CreateNewMovie from "../components/CreateNewMovie";
import Filter from "../components/Filter";
import movies from "../data";
import MovieList from "../components/MovieList";
import { Link } from "react-router-dom";

function HomePage() {
  const [myMovies, setMyMovies] = useState(movies);
  const [updateMemorizedMovies, setUpdateMemorizedMovies] = useState(
    movies.length
  );
  const [loadingMovies, setLoadingMovies] = useState(true);

  // use effect to save movies to local storage every time a user addes a new movie
  useEffect(() => {
    const getMoviesFromLocalStorage = localStorage.getItem("movies");
    // stop the setItem to local storage from runing when the app loads the first time
    if (JSON.parse(getMoviesFromLocalStorage)?.length > myMovies.length) {
      return;
    }
    console.log(updateMemorizedMovies);
    // **********************
    localStorage.setItem("movies", JSON.stringify(myMovies));
  }, [updateMemorizedMovies]);
  // **************************************

  //**  use effect to run some logic whan our app is starting
  // please refer to react official doc to get more knowlegde on how use effect work
  useEffect(() => {
    // check if user has movies stored in their local storage
    if (JSON.parse(localStorage.getItem("movies")) !== null) {
      // if movies are there, set out movies state to the movies gotten from the local storage
      setMyMovies(JSON.parse(localStorage.getItem("movies")));
    }

    // a set timeout function to run the code inside of it after 3 secs
    const timeOut = setTimeout(() => {
      // disable our loading spinner after 3 seconds
      setLoadingMovies(false);
    }, 3000);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);
  // *****************************

  //** let memorize the my movies in a useMemo Hook
  // please check the check the react documenation to get more insite on how useMemo works
  const memorizedMovies = useMemo(() => {
    return {
      myMemorizedMovies: myMovies,
    };
  }, [myMovies, loadingMovies]);
  // ******************************

  // show the loading spinner when the app is starting
  if (loadingMovies) {
    return (
      <div className="grid place-items-center h-screen">
        {" "}
        <Spin tip="Booting..." size="large">
          {" "}
        </Spin>
      </div>
    );
  }

  return (
    <div>
      <div className="max-w-4xl mx-auto flex justify-between flex-col md:flex-row gap-4 py-8 px-3">
        {/* Filter component */}
        <Filter
          setMyMovies={setMyMovies}
          memorizedMovies={memorizedMovies}
          updateMemorizedMovies={updateMemorizedMovies}
        />

        {/* Create new movie component */}
        <CreateNewMovie
          memorizedMovies={memorizedMovies}
          setMyMovies={setMyMovies}
          setUpdateMemorizedMovies={setUpdateMemorizedMovies}
        />
      </div>

      {/* MovieList - Links to Movie Detail Page */}
      <MovieList myMovies={myMovies} />
      {/* {myMovies.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <Link to={`/movie/${movie.id}`}>View Details</Link>
          </div>
        ))}
      </MovieList> */}
    </div>
  );
}

export default HomePage;

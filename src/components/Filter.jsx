import React, { useEffect, useMemo, useState } from "react";
import { Input, Select } from "antd";

const { Search } = Input;

// Filter component receiving props related to movie lists and filters
const Filter = ({ memorizedMovies, setMyMovies, updateMemorizedMovies }) => {
  // Destructuring myMemorizedMovies from props
  const { myMemorizedMovies } = memorizedMovies;

  // Using useMemo to memorize 'myMemorizedMovies' when 'updateMemorizedMovies' changes
  const savedMovies = useMemo(() => myMemorizedMovies, [updateMemorizedMovies]);
  console.log({ savedMovies });

  // State to manage filter options for title and rating
  const [filterOption, setFilterOption] = useState({
    title: "",
    rating: "0",
  });

  // Function to filter movies based on selected options
  function handleFilter() {
    let rating = Number(filterOption.rating);

    // Handling both title and rating filters
    if (filterOption.title && rating) {
      let filteredMovies = savedMovies.filter((movie) =>
        movie.title.toLowerCase().includes(filterOption.title.toLowerCase())
      );

      filteredMovies = filteredMovies.filter(
        (movie) => movie.rating === rating
      );

      return setMyMovies(filteredMovies);
    }

    // Handling only title filter
    if (filterOption.title) {
      const filteredMovies = savedMovies.filter((movie) =>
        movie.title.toLowerCase().includes(filterOption.title.toLowerCase())
      );
      return setMyMovies(filteredMovies);
    }

    // Handling only rating filter
    if (rating) {
      const filteredMovies = savedMovies.filter(
        (movie) => movie.rating === rating
      );

      return setMyMovies(filteredMovies);
    }
  }

  // Triggering filtering effect when filter options change
  useEffect(handleFilter, [filterOption.title, filterOption.rating]);

  return (
    <div>
      {/* Search bar for movie title */}
      <Search
        placeholder="search for movie..."
        allowClear
        enterButton="Search"
        style={{ width: 250 }}
        value={filterOption.title}
        onChange={(event) =>
          setFilterOption((prev) => ({ ...prev, title: event.target.value }))
        }
      />

      {/* Dropdown for filtering movies by rating */}
      <Select
        placeholder="Search by rating"
        value={filterOption.rating}
        onChange={(value) =>
          setFilterOption((prevState) => ({
            ...prevState,
            rating: value,
          }))
        }
        style={{
          width: 200,
        }}
        options={[
          { value: "0", label: "No Rating Selected" },
          { value: "1", label: "1🔸" },
          { value: "2", label: "2🔸🔸" },
          { value: "3", label: "3🔸🔸🔸" },
          { value: "4", label: "4🔸🔸🔸🔸" },
          { value: "5", label: "5🔸🔸🔸🔸🔸" },
        ]}
      />
    </div>
  );
};

export default Filter;

import React, { useState } from "react"; // Importing React and useState from React library

import { Button, Modal, Input, Rate, message } from "antd"; // Importing components from Ant Design library
import { VideoCameraAddOutlined } from "@ant-design/icons"; // Importing a video icon from Ant Design modules

// Importing validator package for validating user inputs
import validator from "validator";

// CreateNewMovie component receiving props related to movie lists
const CreateNewMovie = ({
  setMyMovies,
  setUpdateMemorizedMovies,
  memorizedMovies,
}) => {
  // Setting up state using useState hook for movie information
  const [movieInfo, setMovieInfo] = useState({
    id: Math.random(), // Generating a random ID
    title: "",
    description: "",
    posterURL: "",
    rating: 1,
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // State for controlling the visibility of the modal
  const [messageApi, contextHolder] = message.useMessage(); // Using message from Ant Design for displaying messages

  // Function to handle user input changes for movie details
  const handleInput = (event) => {
    const { id, value } = event.target;
    setMovieInfo((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // Function to handle changes in the movie rating
  const handleRate = (value) => {
    setMovieInfo((prevState) => ({
      ...prevState,
      rating: value,
    }));
  };

  // Function to open the modal for adding a new movie
  const showModal = () => {
    setIsModalOpen(true);
  };

  // Function to add a new movie and close the modal
  const handleOk = () => {
    // Validating user inputs before adding to the array
    // Validation for posterURL and youtubeLink
    // Validation for title, rating, and description

    // Displaying success message after successfully creating a new movie
    messageApi.open({
      type: "success",
      content: "Movie successfully added",
    });

    // Updating movie list with the newly added movie
    setUpdateMemorizedMovies(Math.random()); // Updating movies stored in useMemo with a new movie
    setMovieInfo({
      // Resetting input fields after adding a movie
      id: Math.random(),
      title: "",
      description: "",
      posterURL: "",
      rating: 1,
    });

    setMyMovies((prevState) => [movieInfo, ...prevState]); // Updating movie list state
    setUpdateMemorizedMovies(memorizedMovies.myMemorizedMovies.length + 1);

    setIsModalOpen(false); // Closing the modal
  };

  // Function to close the modal
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Button to open the modal for adding a movie */}
      <Button
        type="primary"
        icon={<VideoCameraAddOutlined />}
        onClick={showModal}
      >
        Click to Add Movie
      </Button>

      {/* Modal for adding a new movie */}
      <Modal
        title="Add new movie"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {contextHolder} {/* Displaying messages within the modal */}
        <div className="space-y-3">
          {/* Input fields for movie details */}
          <Input
            placeholder="Movie poster url"
            id="posterURL"
            onChange={handleInput}
            value={movieInfo.posterURL}
          />
          <div>
            <Input
              placeholder="Movie Title"
              id="title"
              onChange={handleInput}
              value={movieInfo.title}
            />

            <Input
              className="mt-2"
              placeholder="Youtube/Video Link url"
              id="youtubeLink"
              onChange={handleInput}
              value={movieInfo.youtubeLink}
            />

            {/* Component for rating a movie */}
            <div className="shadow my-4 rounded-md p-2 w-fit">
              <p>Rate Movie</p>
              <Rate
                value={movieInfo.rating}
                onChange={(value) => handleRate(value)}
                defaultValue={1}
              />
            </div>
            {/* End of rating component */}
          </div>

          {/* TextArea for movie description */}
          <Input.TextArea
            rows={4}
            id="description"
            onChange={handleInput}
            placeholder="Movie description"
            value={movieInfo.description}
          />
        </div>
      </Modal>
    </>
  );
};

export default CreateNewMovie; // Exporting the CreateNewMovie component

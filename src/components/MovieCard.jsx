import React from "react";
import { Card, Rate } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

const MovieCard = ({ id, title, description, posterURL, rating }) => (
  <Link to={`/movie/${id}`}>
    <Card hoverable cover={<img alt="example" src={posterURL} />}>
      <Meta title={title} description={description.slice(0, 150)} />
      <Rate disabled defaultValue={rating} />
    </Card>
  </Link>
);

export default MovieCard;

import React from "react";
import { useParams } from "react-router";

export const CurrentBlog = () => {
  const { id } = useParams();

  return (
    <p>{id}</p>
  );
}

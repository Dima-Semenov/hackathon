import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getAllBlogs } from "../../../redux/slices/blogSlice";
import './styles.scss';

export const CurrentBlog = () => {
  const { id } = useParams();
  const value = useSelector(getAllBlogs);
  const [currentBlog, setCurrentBlog] = useState();

  useEffect(() => {
    setCurrentBlog(value.find(item => item.id === +id))
  }, [id]);

  console.log(currentBlog)

  return (
    <div className="current-blog">

      <div className="current-blog__back">
        <img src={`https://image.tmdb.org/t/p/original/${currentBlog?.backdrop_path}`} className="current-blog__img" />
      </div>

      <div className="current-blog__container">
        <div className="current-blog__wrap">
          <img src="" />
        </div>
      </div>

    </div>
  );
}

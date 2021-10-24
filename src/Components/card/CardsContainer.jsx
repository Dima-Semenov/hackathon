import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBlogs, getAllBlogsFromApi, getPages, getSearchFilm, setNextPage } from '../../redux/slices/blogSlice'
import arrowUp from '../../assets/icons/arrow-up.png';

import Card from './Card'
import './CardsContainer.scss'

const CardsContainer = () => {
  const dispatch = useDispatch();

  const value = useSelector(getAllBlogs) || [];
  const page = useSelector(getPages)
  const searchFilm = useSelector(getSearchFilm);
  const [sortedValue, setSortedValue] = useState([]);

  useEffect(() => {
    dispatch(getAllBlogsFromApi({ page: 1 }))
  }, [])

  useEffect(() => {
    setSortedValue(value.filter(item => item.title.toLowerCase().includes(searchFilm.trim().toLowerCase())))
  }, [searchFilm, value])

  const paginationPage = () => {
    dispatch(setNextPage())
    dispatch(getAllBlogsFromApi({ page }))
  }

  const handleScroll = () => {
    const el = document.querySelector('.scroll_to_top');
    if (window.pageYOffset > 600) {
      el.classList.add('scroll_to_top-active');
    } else {
      el.classList.remove('scroll_to_top-active');
    }
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  
  if(!sortedValue.length) {
    return (
      <div className="not_result">
        <p>
          Not result with this name
        </p>
      </div>
    );
  }
  
	return (
    <InfiniteScroll
        dataLength={value.length}
        next={paginationPage}
        hasMore={true}
        loader={<div>Loading...</div>}
        className={'card-main-container'}
        onScroll={handleScroll}
    >
      {sortedValue.map(({ id, title, overview, poster_path }) => {
        return (
          <Card
            key={id}
            id={id}
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt={'image'}
            title={title}
            description={overview}
          />
        )
      })}

      <div className="scroll_to_top" onClick={scrollToTop}>
        <img src={arrowUp} alt="arrow" style={{ height: 25}} />
      </div>
    </InfiniteScroll>
	)
}

export default CardsContainer

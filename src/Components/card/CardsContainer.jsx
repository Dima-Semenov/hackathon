import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBlogs, getAllBlogsFromApi } from '../../redux/slices/blogSlice'

import Card from './Card'
import './CardsContainer.scss'

const CardsContainer = () => {
  const dispatch = useDispatch();

	const value = useSelector(getAllBlogs)

  useEffect(() => {
    dispatch(getAllBlogsFromApi({ page: 1 }))
  }, [])
  
  const paginationPage = () => {
    dispatch(getAllBlogsFromApi({ page: 2 }))
  }

	return (
		<div className="card-main-container" onClick={paginationPage} >
			{value?.map(({ id, title, overview, poster_path }) => {
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
		</div>
	)
}

export default CardsContainer

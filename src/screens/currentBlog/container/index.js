import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getAllBlogs } from '../../../redux/slices/blogSlice'
import './styles.scss'

export const CurrentBlog = () => {
	const { id } = useParams()
	const value = useSelector(getAllBlogs)
	const [currentBlog, setCurrentBlog] = useState()

	useEffect(() => {
		setCurrentBlog(value.find(item => item.id === +id))
	}, [id])

	console.log(currentBlog)

	return !currentBlog ? (
		<div>Loading....</div>
	) : (
		<div className="current-blog">
			<div className="current-blog__back">
				<img
					src={`https://image.tmdb.org/t/p/original/${currentBlog?.backdrop_path}`}
					className="current-blog__img"
				/>
			</div>

			<div className="current-blog__container">
				<img
					src={`https://image.tmdb.org/t/p/original/${currentBlog?.poster_path}`}
				/>
				<div className="current-blog__container-about">
					<h1>{currentBlog.title}</h1>
					<p>{currentBlog.overview}</p>
				</div>
			</div>
		</div>
	)
}

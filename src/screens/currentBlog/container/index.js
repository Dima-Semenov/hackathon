import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import {
	getAllBlogs,
	getBlog,
	getCurrentBlog,
} from '../../../redux/slices/blogSlice'
import './styles.scss'

export const CurrentBlog = () => {
	const { id } = useParams()
	const value = useSelector(getAllBlogs)
	const [currentBlog, setCurrentBlog] = useState()
	const dispatch = useDispatch()
	const blog = useSelector(getBlog) || null

	useEffect(() => {
		setCurrentBlog(value.find(item => item.id === +id))
	}, [id])

	useEffect(() => {
		dispatch(getCurrentBlog({ movieId: id }))
	}, [id])

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

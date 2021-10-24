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

	console.log(blog)

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
					className="current-blog__container-img"
					src={`https://image.tmdb.org/t/p/original/${currentBlog?.poster_path}`}
				/>
				<div className="current-blog__container-about">
					<h1>{currentBlog.title}</h1>
					<p>
						<span>{blog.release_date}</span> | <span>{blog.runtime} min</span>
					</p>
					<p>{currentBlog.overview}</p>
					<p>
						<b>Genres: </b>
						{blog.genres.map(item => (
							<span key={item.id}>{item.name}, </span>
						))}{' '}
					</p>{' '}
					<p>
						<b>Countries: </b>
						{blog.production_countries.map(item => (
							<span key={item.iso_3166_1}>{item.name}, </span>
						))}{' '}
					</p>{' '}
					<p>
						<b>Languages: </b>
						{blog.spoken_languages.map(item => (
							<span key={item.iso_639_1}>{item.english_name}, </span>
						))}{' '}
					</p>{' '}
					<p>
						<b>Average score: </b>
						<span> {blog.vote_average} </span>
					</p>{' '}
					<p>
						<b>Budget: </b>
						<span>$ {blog.budget} </span>
					</p>
					<p style={{ height: '50px', marginTop: '20px' }}>
						{blog.production_companies.map(item =>
							item.logo_path ? (
								<img
									src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
									key={item.id}
									style={{ height: '100%', marginLeft: '10px' }}
								/>
							) : (
								<span key={item.id} style={{ marginLeft: '15px' }}>
									<b>{item.name}</b>
								</span>
							),
						)}{' '}
					</p>
				</div>
			</div>
		</div>
	)
}

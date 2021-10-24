import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	getFavoriteFilm,
	getFavoritesFilmInUser,
	getSortedBy,
	orderByHight,
	orderByLower,
	orderByPopulation,
} from '../../../../redux/slices/blogSlice'
import './styles.scss'

export const SideBar = () => {
	const dispatch = useDispatch()
	const favoriteFilm = useSelector(getFavoriteFilm)
	const sortedBy = useSelector(getSortedBy)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [sortedBy])

	const closeMenu = () => {
		const burger = document.querySelector('.sideBar')
		burger.classList.remove('sideBar-active')
	}

	return (
		<div className="sideBar">
			<div className="sideBar__wrap">
				<div className="sideBar__close" onClick={closeMenu}>
					X
				</div>
				<h2 className="sideBar__title">Films Blog</h2>

				<p className="sideBar__search">Sorted by</p>
				<ul>
					<li
						onClick={() => {
							dispatch(orderByPopulation())
							closeMenu()
						}}
						className={`sideBar__item ${
							sortedBy.sortedBy === 'population' && 'sideBar__item-active'
						}`}
					>
						The most popular
					</li>
					<li
						onClick={() => {
							dispatch(orderByLower())
							closeMenu()
						}}
						className={`sideBar__item ${
							sortedBy.sortedBy === 'lower' && 'sideBar__item-active'
						}`}
					>
						Rating (descending)
					</li>
					<li
						onClick={() => {
							dispatch(orderByHight())
							closeMenu()
						}}
						className={`sideBar__item ${
							sortedBy.sortedBy === 'hight' && 'sideBar__item-active'
						}`}
					>
						Rating (growing)
					</li>
					{!favoriteFilm.length || (
						<li
							onClick={() => {
								dispatch(getFavoritesFilmInUser({ films: favoriteFilm }))
								closeMenu()
							}}
							className={`sideBar__item ${
								sortedBy.sortedBy === 'Favorites' && 'sideBar__item-active'
							}`}
						>
							Favorites
							<span className="sideBar__item-like">{favoriteFilm.length}</span>
						</li>
					)}
				</ul>
			</div>
		</div>
	)
}

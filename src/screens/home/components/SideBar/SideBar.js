import React from 'react'
import './SideBar.scss'

export const SideBar = () => {
	return (
		<div className="sideBar">
			<h2 className="sideBar__title">Films Blog</h2>

			<p className="sideBar__search">Search for</p>
			<ul className="sideBar_list">
				<li className="sideBar_item">Actors</li>
				<li className="sideBar_item">Movies</li>
				<li className="sideBar_item">Series</li>
				<li className="sideBar_item">Genres</li>
			</ul>
		</div>
	)
}

import React from 'react'
import './styles.scss'

export const SideBar = () => {
	return (
		<div className="sideBar">
      <div className="sideBar__wrap">
        <h2 className="sideBar__title">Films Blog</h2>

        <p className="sideBar__search">Sort by</p>
        <lu className="sideBar__list">
          <li className="sideBar__item">
            <span className="sideBar__icon sideBar__actors" />
            Actors
          </li>
          <li className="sideBar__item">
            <span className="sideBar__icon sideBar__films" />
            Movies
          </li>
          <li className="sideBar__item">
            <span className="sideBar__icon sideBar__series" />
            Series
          </li>
          <li className="sideBar__item">
            <span className="sideBar__icon sideBar__genres" />
            Genres
          </li>
        </lu>

      </div>
		</div>
	)
}

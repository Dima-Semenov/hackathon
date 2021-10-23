import React from 'react'
import './RightSidebar.scss'

export const RightSidebar = ({ title, description, date, authors }) => {
	return (
		<div className="right-sidebar">
			<div className="right-sidebar__title">{title}</div>
			<div className="right-sidebar__describtion">{description}</div>
			<div className="right-sidebar__date">{date}</div>
			<div className="right-sidebar__authors">{authors}</div>
			<div className="right-sidebar__actors">Actors:</div>
			<div className="right-sidebar__genre">Genre:</div>
		</div>
	)
}

import React from 'react'
import { useSelector } from 'react-redux'
import { getAllBlogs } from '../../redux/slices/blogSlice'

import Card from './Card'
import './CardsContainer.scss'

const CardsContainer = () => {
	const value = useSelector(getAllBlogs)

	return (
		<div className="card-main-container">
			{value?.map(elem => {
				return (
					<Card
						key={elem.id}
						src={elem.image}
						alt={'image'}
						title={elem.title}
						description={elem.description}
					/>
				)
			})}
		</div>
	)
}

export default CardsContainer

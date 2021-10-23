import React from 'react'
import { RightSidebar } from '../components/RightSidebar/RightSidebar'
import { SideBar } from '../components/SideBar/SideBar'
import './styles.scss'

export const Home = () => {
	return (
		<div className="home-screen">
			<SideBar />
			<RightSidebar
				title={'title'}
				describtion={'description'}
				date={'date'}
				authors={'authors'}
			/>
		</div>
	)
}

import React from 'react'
import Header from '../../../Components/header/Header';
import { SideBar } from '../components/SideBar';
import { RightSidebar } from '../components/RightSidebar/RightSidebar'
import './styles.scss'
import CardsContainer from '../../../Components/card/CardsContainer';

export const Home = () => {
	return (
		<div className="home-screen">
			<SideBar />
      <div className="home-screen__content">
        <Header />
        <div className="home-screen__wrap">
          <CardsContainer />
          <RightSidebar
            title={'title'}
            describtion={'description'}
            date={'date'}
            authors={'authors'}
          />
        </div>
      </div>
		</div>
	)
}

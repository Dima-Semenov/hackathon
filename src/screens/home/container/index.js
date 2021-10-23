import React from 'react'
import Header from '../../../Components/header/Header';
import { SideBar } from '../components/SideBar';
import './styles.scss'

export const Home = () => {
	return (
    <div className="home-screen">
      <SideBar />
      <Header />
    </div>
  );
}

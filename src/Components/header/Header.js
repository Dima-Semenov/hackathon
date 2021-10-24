import React from 'react'
import '../header/header.scss'

import SearchForm from '../searchForm/SearchForm'
import UserInfo from './userInfo/UserInfo'
import UserLogout from './userLogout/UserLogout'

import burger from '../../assets/icons/menu.svg';

const Header = () => {

  const openBurger = () => {
    const burger = document.querySelector('.sideBar')
    burger.classList.toggle('sideBar-active');
  }

	return (
		<header className="header">
			<div className="header_main_container">
				<div className="header_container">

          <div className="header_burger" onClick={openBurger}>
            <img src={burger} className="header_menu" />
          </div>


					<SearchForm />
					<UserInfo />

					<UserLogout />
				</div>
			</div>
		</header>
	)
}

export default Header

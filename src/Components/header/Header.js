import React from 'react'
import '../header/header.scss'
// import { useSelector } from 'react-redux';
// import { getIsAuth } from '../../redux/auth/auth.selectors';

import HeaderBackgroundImg from '../../assets/icons/background.jpg'
import SearchForm from '../searchForm/SearchForm'
import UserInfo from './userInfo/UserInfo'
import UserLogout from './userLogout/UserLogout'

const Header = () => {
	//   const isAuth = useSelector(getIsAuth);

	return (
		<header>
			<div className="header_main_container">
				<div className="header_container">
					<SearchForm></SearchForm>
					<UserInfo />

					<UserLogout />
				</div>
			</div>
		</header>
	)
}

export default Header

import React from 'react';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { getIsAuth } from '../../redux/auth/auth.selectors';

import LogoImg from '../../assets/icons/112233.jpg';
import UserInfo from './userInfo/UserInfo';
import UserLogout from './userLogout/UserLogout';

const Header = () => {
  //   const isAuth = useSelector(getIsAuth);

  return (
    <header>
      <div>
        {/* <Link to='/' alt='authpage'>
          <img src={LogoImg} alt='genesis-logo' />
        </Link> */}

        <div>
          <UserInfo />
          <UserLogout />
        </div>
      </div>
    </header>
  );
};

export default Header;

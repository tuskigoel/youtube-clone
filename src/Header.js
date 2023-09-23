import React from 'react';
import './Header.css';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import youtubeLogo from './image/YouTube_Logo_2017.png';

function Header() {
    return (
        <div className='header'>
        <div className="header__left">
        <MenuSharpIcon />
        <img 
        className='header__logo'
        src={youtubeLogo} 
        alt="youtubelogo"
        />
        </div>

        <div className="header__input">
        <input placeholder = 'Search' type='text'/>
        <SearchSharpIcon className="header__inputButton" />
        </div>

        <div className="header__icons">
        <VideoCallSharpIcon className='header__icon'/>
        <AppsSharpIcon className='header__icon' />
        <NotificationsSharpIcon className='header__icon' />
        <AccountCircleSharpIcon
          alt="Tushar Goel"
          //src="";
          />
       </div>
       </div>
    )
}
export default Header
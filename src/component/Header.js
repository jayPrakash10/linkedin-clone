import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import AppsIcon from '@material-ui/icons/Apps';

function Header(){
    return(
            <div className='header'>
                <div className='headerlogo'>
                    <img className='logo' alt='LinkedIn_logo' src='/images/images.png'/>
                </div>
                <div className='headerinput'>
                    <SearchIcon />
                    <input type='text' placeholder='Search'/>
                </div>
                <div className='headericons'>
                    <NotificationsIcon className='headericon'/>
                    <i className='fa fa-commenting headericon'></i>
                    <Avatar variant='rounded' className='headericon' src='/images/iron-man.jpg'/>
                    
                    <AppsIcon className='headericon'/>
                    <button >Upgrade to Premium</button>
                </div>
            </div>
    )
}

export default Header;
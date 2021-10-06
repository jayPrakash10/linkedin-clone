import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MessageIcon from '@material-ui/icons/Message';
import Avatar from '@material-ui/core/Avatar';
import AppsIcon from '@material-ui/icons/Apps';
// import Button from '@material-ui/icons/Button';

function Header(){
    return(
        <>
            <div className='header'>
                <div className='headerlogo'>
                    <img className='logo' alt='LinkedIn_logo' src='linkedin-130.svg'/>
                </div>
                <div className='headerinput'>
                    <SearchIcon />
                    <input type='text' placeholder='Search'/>
                </div>
                <div className='headericons'>
                    <NotificationsIcon classname='headericon'/>
                    <MessageIcon classname='headericon'/>
                    <Avatar variant='rounded' classname='headericon'/>
                    <AppsIcon classname='headericon'/>
                    <button >Upgrade to Premium</button>
                </div>
            </div>
        </>
    )
}

export default Header;
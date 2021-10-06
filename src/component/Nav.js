import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import Navcomp from './Navcomp';
function Nav(){
    return(
        <>
            <div className='nav'>
                <Navcomp Icon={HomeIcon} title='Home'/>
                <Navcomp Icon={PeopleAltRoundedIcon} title='My Network'/>
                <Navcomp Icon={BusinessCenterOutlinedIcon} title='Job Offers'/>
                <Navcomp Icon={PersonRoundedIcon} title='Profile'/>
            </div>
        </>
    )
}

export default Nav
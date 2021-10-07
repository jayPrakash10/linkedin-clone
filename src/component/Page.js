import React from 'react'
import Description from './Description'
import Pagead from './Pagead'
import Profile from './Profile'

function Page(){
    return(
        <div className='container'>
            <div className='content'>
                <Profile/>
                <div className='navigation'>
                    <div>Overview</div>
                    <div>About</div>
                    <div>Products</div>
                    <div>Post</div>
                    <div>Jobs</div>
                    <div>People</div>
                    <div>Videos</div>
                    <i className='fa fa-invision'></i>
                </div>
                <Description/>
            </div>
            <Pagead />
        </div>
    )
}

export default Page
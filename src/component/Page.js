import React from 'react'
import './Page.css'
import Description from './Description'
import Pagead from './Pagead'
import Profile from './Profile'

function Page(){
    function toggle(ele){
        document.getElementsByClassName('active')[0].classList.remove('active')
        document.getElementById(ele).classList.add('active')
    }

    return(
        <div className='container'>
            <div className='content'>
                <Profile/>
                <div className='navigation'>
                    <div id='overview' onClick={()=>toggle('overview')}>Overview</div>
                    <div id='about'className='active' onClick={()=>toggle('about')}>About</div>
                    <div id='products' onClick={()=>toggle('products')}>Products</div>
                    <div id='post' onClick={()=>toggle('post')}>Post</div>
                    <div id='jobs' onClick={()=>toggle('jobs')}>Jobs</div>
                    <div id='people' onClick={()=>toggle('people')}>People</div>
                    <div id='videos' onClick={()=>toggle('videos')}>Videos</div>
                </div>
                <Description/>
            </div>
            <Pagead />
        </div>
    )
}

export default Page
import React from 'react'
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
                </div>
                <div className='description'>
                    <h3>
                        About
                    </h3>
                    <p>Figma is the first professional-grade online tool created specifically for interface design. Born on the Web, Figma helps the entire product team create, test, and ship better designs, faster.</p>
                </div>
                
            </div>
            <div className='ad'>
                People
            </div>
        </div>
    )
}

export default Page
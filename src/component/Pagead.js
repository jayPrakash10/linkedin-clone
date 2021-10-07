import React from 'react'
import './Pagead.css'
import Pageaccount from './Pageaccount';

function Pagead(){
    return(<>
        <div className='ad'>
            <div className='pagead'>
                Pages people also viewed
                <Pageaccount avatar='/images/invision.svg' title='InVision' occup='Internet' follower='137K'/>
                <Pageaccount avatar='/images/sketch.jpg' title='Sketch' occup='Design' follower='33K'/>
                <Pageaccount avatar='/images/dribbble.png' title='Dribbble' occup='Design' follower='162K'/>
                <Pageaccount avatar='/images/behance.svg' title='Behance' occup='Internet' follower='67K'/>
                <Pageaccount avatar='/images/overlap.png' title='Overlap Studio' occup='Information Technology & Services' follower='105'/>
                <Pageaccount avatar='/images/medium.jpg' title='Medium' occup='Online Media' follower='101K'/>
                <Pageaccount avatar='/images/adobe.jpeg' title='Adobe' occup='Computer Software' follower='2,68M'/>
                <Pageaccount avatar='/images/slack.png' title='Slack' occup='Computer Software' follower='582K'/>
            </div>
            <div className='services'>
                <div>About</div>
                <div>Accessibilty</div>
                <div>Help Center</div>
                <div>Privacy & Terms <i className='fa fa-angle-down'></i></div>
                <div>Ad Choices</div>
                <div>Advertising</div>
                <div>Business Services <i className='fa fa-angle-down'></i></div>
                <div>Get the LinkedIn App</div>
                <div>...</div>
            </div>
            <div className='copyrights'>
                <img src='/images/linkedin.png' alt='linkedin'/>
                <div>LinkedIn © 2021</div>
            </div>
        </div>
        </>
    )
}

export default Pagead;
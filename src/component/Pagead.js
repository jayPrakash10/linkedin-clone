import React from 'react'
import Pageaccount from './Pageaccount';

function Pagead(){
    return(<>
        <div className='ad'>
            <div className='pagead'>
                Pages people also viewed
                <Pageaccount avatar='invision.svg' title='InVision' occup='Internet' follower='137K'/>
                <Pageaccount avatar='sketch.jpg' title='Sketch' occup='Design' follower='33K'/>
                <Pageaccount avatar='dribbble.png' title='Dribbble' occup='Design' follower='162K'/>
                <Pageaccount avatar='behance.svg' title='Behance' occup='Internet' follower='67K'/>
                <Pageaccount avatar='overlap.png' title='Overlap Studio' occup='Information Technology & Services' follower='105'/>
                <Pageaccount avatar='medium.jpg' title='Medium' occup='Online Media' follower='101K'/>
                <Pageaccount avatar='adobe.jpeg' title='Adobe' occup='Computer Software' follower='2,68M'/>
                <Pageaccount avatar='slack.png' title='Slack' occup='Computer Software' follower='582K'/>
            </div>
        </div>
        </>
    )
}

export default Pagead;
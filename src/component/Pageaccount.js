import React from "react";
import Avatar from "@material-ui/core/Avatar";

function Pageaccount({avatar, title, occup, follower}){
    return(
        <div className='pageaccount'>
            <Avatar src={avatar}/>
            <div className='pageinfo'>
                <div><strong>{title}</strong></div>
                <div><p>{occup}</p> . <p>{follower} followers</p></div>
            </div>
            <div>
                <i className='fa fa-eye'></i>
            </div>
        </div>
    )
}

export default Pageaccount;
import React from 'react'

function Navcomp({Icon, title}){
    return(
        <div className='navcomp'>
            <Icon className='navicon'/>
            <div>{title}</div>
        </div>
    )
}

export default Navcomp
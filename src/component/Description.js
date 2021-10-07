import React from 'react'

function Description(){
    return(
            <div className='description'>
                <h3>
                    About
                </h3>
                <p>Figma is the first professional-grade online tool created specifically for interface design. Born on the Web, Figma helps the entire product team create, test, and ship better designs, faster.</p>
                <div className='descriptiontemplate'>
                    <div className='card'>
                        <div></div>
                        <div>Website URL</div>
                        <div>Figma.com</div>
                    </div>
                    <div className='card'>
                        <div>Funding via Crunchbase</div>
                        <div>Series D</div>
                        <div>US$ 50M</div>
                    </div>
                </div>
                <div>See all details</div>
            </div>                
    )
}

export default Description
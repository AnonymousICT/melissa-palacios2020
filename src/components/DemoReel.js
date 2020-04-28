import React from 'react'

export default function DemoReel() {
    return (
        <section className="demo-reel" id="demo-reel">
            <div className='embed-container'>
            <iframe 
                title="demo-reel" 
                src='https://player.vimeo.com/video/247865289' 
                frameBorder='0' 
                webkitallowfullscreen="true" 
                mozallowfullscreen ="true" 
                allowFullScreen={true}  />
            </div>
        </section>
    )
}

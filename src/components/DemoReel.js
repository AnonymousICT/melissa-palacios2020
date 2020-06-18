import React from 'react'
// import {Gallery} from './components'
import './stylesheets/demoreel.css'

export default function DemoReel() {
    return (
        <section className="demo-reel" id="demo-reel">
            
            <div className='video-container'>
            <div className='embed-container'>
            <iframe 
                title="demo-reel" 
                src='https://player.vimeo.com/video/247865289' 
                frameBorder='0' 
                webkitallowfullscreen="true" 
                mozallowfullscreen ="true" 
                allowFullScreen={true}  />
            </div>
            </div>
        </section>
    )
}

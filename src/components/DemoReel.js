import React from 'react'
import {Gallery} from './components'

export default function DemoReel() {
    return (
        <section className="demo-reel" id="demo-reel">
            <h2 className="section__title section__title--demoreel">Demo Reel</h2>
            {/* <div className='embed-container'>
            <iframe 
                title="demo-reel" 
                src='/assets/video/pkmn_go_melissapalacios.mp4' 
                frameBorder='0' 
                webkitallowfullscreen="true" 
                mozallowfullscreen ="true" 
                allowFullScreen={true}  />
            </div> */}
            <div className='embed-container'>
            <iframe 
                title="demo-reel" 
                src='https://player.vimeo.com/video/247865289' 
                frameBorder='0' 
                webkitallowfullscreen="true" 
                mozallowfullscreen ="true" 
                allowFullScreen={true}  />
            </div>
            <Gallery />
        </section>
    )
}

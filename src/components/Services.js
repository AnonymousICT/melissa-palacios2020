import React from 'react'
import {Link} from 'react-router-dom'

export default function Services() {
    return (
        <section className="my-services" id="services">
        <h2 className="section__title section__title--services">What I do</h2>
        <div className="services">
            <div className="service">
                <h3>Awards</h3>
                <p>Grand prize winner of the international 2014 LINE and Giphy Sticker Shop Contest. 
                    Received over 500,000 votes over the course of several weeks. Winning emoji design 
                    became available in LINE app and was commissioned to do more designs for the LINE app. 
                </p>
            </div>
            <div className="service">
                <h3>Animator</h3>
                <p>Animator for various student projects and film openings. Experience in adobe animate/flash, 
                    maya, and photoshop for animation
                </p>
            </div>
            <div className="service">
                <h3>Concept Artist</h3>
                <p>Traditional concept artist for small projects that include human as well as creature 
                    design. Styles range from cute/soft to mature. 
                </p>
            </div>
            <div className="service">
                <h3>Storyboarder</h3>
                <p>Assisted and occasionally creative lead in several independent projects that vary from 
                    video game cutscenes to full fledged animated shorts. 
                </p>
            </div>
        
        </div>
        <div className='services-links-container'>
            <Link to='/conceptart' className='services-links btn'>Concept Art</Link>
            <Link to='/visualdev' className='services-links btn'>Storyboard Work</Link>
        </div>
        
        </section>
    )
}

import React from 'react'
import {Link} from 'react-router-dom'
import ConceptArt from './ConceptArt'

export default function ConceptArtGallery() {
    const ConceptArtImage = ConceptArt.map((item, i)=> (
        <div className='gallery-item'>
            <img key={i} alt={i} src={item} />
        </div>
    ))

    return (
        <div class='VisualDev'>
            <h2 className="section__title section__title--visualDev">Concept Art</h2>
            <div className='VisualDev__Gallery'>
                {ConceptArtImage}
            </div>
            <div className='links-container'>
                <Link to='/services' className='services-links btn'>Back To Services</Link>
                <Link to='/contactme' className='services-links btn'>Contact Me</Link>
            </div>
        </div>
    )
}

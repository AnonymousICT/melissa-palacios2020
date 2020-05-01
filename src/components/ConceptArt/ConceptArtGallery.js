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
            <Link to='/services' className='btn'>Back To Services</Link>
        </div>
    )
}

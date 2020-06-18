import React from 'react'
import ConceptArt from './ConceptArt'
import '../stylesheets/conceptart.css'
import "bootstrap/dist/css/bootstrap.css";
import Carousel from 'react-bootstrap/Carousel'

export default function ConceptArtGallery() {
    const ConceptArtImage = ConceptArt.map((item, i)=> (
        <Carousel.Item>
            <img
                className="d-block w-100"
                key={i}
                alt={i}
                src={item}
            />
        </Carousel.Item>
    ))

    return (
        <div class='ConceptArt'>
            <h2 className="section__title section__title--ConceptArt">Concept Art</h2>
            <div className='ConceptArt__Gallery'>
                <Carousel
                    interval={3000}
                    pause='hover'
                    touch={true}
                >
                    {ConceptArtImage}
                </Carousel>
            </div>
        </div>
    )
}

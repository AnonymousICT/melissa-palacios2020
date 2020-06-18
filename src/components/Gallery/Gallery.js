import React from 'react'
import Illustrations from './Illustrations'
import "bootstrap/dist/css/bootstrap.css";
import Carousel from 'react-bootstrap/Carousel'
import './gallery.css'
import '../stylesheets/carousel.css'

export default function Gallery() {
    const IllustrationImages = Illustrations.map((item, i)=> (
        <Carousel.Item>
            <img
                className="d-block w-100"
                alt={i}
                src={item}
            />
        </Carousel.Item>
    ))

    return (
        <div className='carousel'>
            <Carousel
                interval={3000}
                pause='hover'
                touch={true}
            >
                {IllustrationImages}
            </Carousel>
        </div>
    )
    
    
}

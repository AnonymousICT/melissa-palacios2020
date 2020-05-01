import React from 'react'
import {Link} from 'react-router-dom'
import VisualDev from './VisualDev'


export default function VisualDevGallery() {
    const {Busstop}= VisualDev
    const BusstopImage = Busstop.map((item, i) => (
        <div className='gallery-item'>
            <img key={i} alt={i} src={item} />
        </div>
    ))
    
    return (
        <div className='VisualDev'>
            <h2 className="section__title section__title--visualDev">Storyboard work</h2>
            <div className='VisualDev__Gallery'>
                {BusstopImage}
            </div>
            <div>
                <Link to='/services' className='btn'>Back To Services</Link>
                <Link to='/contactme' className='btn'>Contact Me</Link>
            </div>  

        </div>
    )
}

 
import React from 'react'
import {Link} from 'react-router-dom'
import VisualDev from './VisualDev'


export default function VisualDevGallery() {
    const {Busstop, Sync01, Sync07 }= VisualDev
    const BusstopImage = Busstop.map((item, i) => (
        <div className='gallery-item'>
            <img key={i} alt={i} src={item} />
        </div>
    ))
    const Sync01Image = Sync01.map((item, i) => (
        <div className='gallery-item'>
            <img key={i} alt={i} src={item} />
        </div>
    ))
    const Sync07Image = Sync07.map((item, i) => (
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
            <div className='VisualDev__Gallery'>
                {Sync01Image}
            </div>
            <div className='VisualDev__Gallery'>
                {Sync07Image}
            </div>
            <div>
                <Link to='/contactme' className='btn'>Contact Me</Link>
            </div>  

        </div>
    )
}

 
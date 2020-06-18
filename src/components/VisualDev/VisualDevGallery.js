import React from 'react'
import './visualdev.css'


const VisualDev= [
    '/assets/visdev/REV01.png',
    '/assets/visdev/REV02.png',
]


export default function VisualDevGallery() {
    const VisualDevImage = VisualDev.map((item, i) =>
        <div className='gallery-item'>
            <img key={i} alt={i} src={item} />
        </div>
    )

    return (
        <div className='VisualDev'>
            <h2 className="section__title section__title--visualDev">Storyboard work</h2>
            <div className='VisualDev__Gallery'>
                {VisualDevImage}
            </div>
        </div>
    )
}

 
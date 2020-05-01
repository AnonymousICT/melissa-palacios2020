import React from 'react'
import Illustrations from './Illustrations'
import AwesomeSlider from 'react-awesome-slider';
import './styles.scss'

export default function Gallery() {
    const IllustrationImage = Illustrations.map((item, i) => (
        <div key={i} data-src={item}></div>
        ))

    return (
        <div className='gallery'>
           <AwesomeSlider
                className='gallery-slider' 
                id='Illustrations'
                play={true}
                cancelOnInteraction={false}
                interval={6000}
           >
                {IllustrationImage}
           </AwesomeSlider>
           
        </div>
    )
}

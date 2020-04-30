import React from 'react'
import Illustrations from './Illustrations'
// import VisualDev from './VisualDev'
import AwesomeSlider from 'react-awesome-slider';
import './styles.scss'

export default function Gallery() {
    // const {Busstop, Sync01, Sync07 }= VisualDev
    // const BusstopImage = Busstop.map((item, i) => (
    //     <div key={i} data-src={item}></div>
    // ))
    // const Sync01Image = Sync01.map((item, i) => (
    //     <div key={i} data-src={item}></div>
    // ))
    // const Sync07Image = Sync07.map((item, i) => (
    //     <div key={i} data-src={item}></div>
    // ))
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

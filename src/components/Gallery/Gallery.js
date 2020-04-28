import React, {useState} from 'react'
import Lightbox from 'react-image-lightbox'
import VisualDev from './VisualDev'
import "react-image-lightbox/style.css";


export default function Gallery() {
    const lightboxes = ["Bustop", "Sync01", "Sync07"]
    const [isOpen, setIsOpen] = useState(0)
    const [photoIndex, setPhotoIndex] = useState(0)

    return (
        <div className='gallery'>
            {lightboxes.map(item => (
                <div>
                    <button className='btn' type="button" key={item} onClick={() => setIsOpen(item)}>
                        Open Lightbox {item}
                    </button>
                </div>
            ))}
            {!!isOpen && (
                <Lightbox 
                    mainSrc= {VisualDev[isOpen][photoIndex]}
                    nextSrc={VisualDev[isOpen][(photoIndex + 1) % VisualDev[isOpen].length]}
                    prevSrc= {
                        VisualDev[isOpen][
                            (photoIndex + VisualDev[isOpen].length - 1) % VisualDev[isOpen].length
                        ]
                    }
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() => 
                        setPhotoIndex(photoIndex + VisualDev[isOpen].length -1) % VisualDev[isOpen].length
                    }
                    onMoveNextRequest={()=>
                        setPhotoIndex((photoIndex+1) % VisualDev[isOpen].length)
                    }            
                />
            )}
        </div>
    )
}

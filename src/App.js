import React from 'react'
import {
    AboutMe, 
    DemoReel, 
    Footer, 
    Header, 
    Intro, 
    Gallery,
    Services , 
    ContactForm,
    VisualDevGallery,
    ConceptArtGallery
} from './components/components'
import './components/stylesheets/style.css'

export default function App() {
    return (
        <>
        <Header />
        <Intro />
        <Gallery />
        <DemoReel />
        <VisualDevGallery />
        <ConceptArtGallery />
        <AboutMe />
        <Services />
        <ContactForm />
        <Footer />
        </>
    )
}

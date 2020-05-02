import React from 'react'
import {
    // AboutMe, 
    DemoReel, 
    Footer, 
    Header, 
    Intro, 
    Services , 
    ContactForm,
    VisualDevGallery,
    ConceptArtGallery
} from './components/components'
import {Switch, Route} from 'react-router-dom'
import './style.css'

export default function App() {
    return (
        <>
        <Header />
        <Intro />
        <Switch>
            <Route exact path='/' component={DemoReel} />
            {/* <Route path='/about' component={AboutMe} /> */}
            <Route path='/conceptart' component={ConceptArtGallery}/>
            <Route path='/visualdev' component={VisualDevGallery} />
            <Route path='/services' component={Services} />
            <Route path='/contactme' component={ContactForm} />
        </Switch>
        <Footer />
        </>
    )
}

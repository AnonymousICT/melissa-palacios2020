import React from 'react'
import {
    AboutMe, 
    DemoReel, 
    Footer, 
    Header, 
    Intro, 
    Services , 
    ContactForm,
    VisualDevGallery
} from './components/components'
import {Switch, Route} from 'react-router-dom'

export default function App() {
    return (
        <>
        <Header />
        <Intro />
        <Switch>
            <Route exact path='/' component={DemoReel} />
            <Route path='/About' component={AboutMe} />
            <Route path='/gallery' component={VisualDevGallery} />
            <Route path='/services' component={Services} />
            <Route path='/contactme' component={ContactForm} />
        </Switch>
        <Footer />
        </>
    )
}

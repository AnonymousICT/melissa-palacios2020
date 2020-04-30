import React from 'react'
import {AboutMe, DemoReel, Footer, Header, Gallery, Intro, Services , ContactForm} from './components/components'
import {Switch, Route} from 'react-router-dom'

export default function App() {
    return (
        <>
        <Header />
        <Intro />
        <Switch>
            <Route exact path='/' component={DemoReel} />
            <Route path='/About' component={AboutMe} />
            <Route path='/gallery' component={Gallery} />
            <Route path='/services' component={Services} />
            <Route path='/contactme' component={ContactForm} />
        </Switch>
        <Footer />
        </>
    )
}

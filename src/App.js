import React from 'react'
import {AboutMe, DemoReel, Footer, Header, Gallery, Intro, Services} from './components/components'
import {Switch, Route} from 'react-router-dom'

export default function App() {
    return (
        <>
        <Header />
        <Intro />
        <Switch>
            <Route exact path='/' component={AboutMe} />
            <Route path='/demoreel' component={DemoReel} />
            <Route path='/gallery' component={Gallery} />
            <Route path='/services' component={Services} />

        </Switch>
        <Services />
        {/* gallery */}
        {/* commissions */}
        <Footer />

        </>
    )
}

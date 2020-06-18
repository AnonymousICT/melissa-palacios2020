import React from 'react'
import './stylesheets/intro.css'

export default function intro() {
    return (
        <section className="intro" id="home">
            <h1 className="section__title section__title--intro">Hi, I am
                <strong>Melissa Palacios</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">Animator, Concept Artist</p>
            <img src="/icon.png" alt="cartoon Melissa" className="intro__img"/>

            
        </section>
    )
}

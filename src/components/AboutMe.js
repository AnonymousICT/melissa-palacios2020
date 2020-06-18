import React from 'react'
import './stylesheets/aboutme.css'

export default function AboutMe() {
    return (
        <section className="about-me" id="about">
            <h2 className="section__title section__title--about">Who I am</h2>
            <p className="section__subtitle section__subtitle--about">Artist based in the California Bay Area</p>
            <img src="/profile.png" alt="Melissa Headshot" className="about-me__img" />
            <div className="about-me__body">
                <p>I love plushies. Maybe a little too much. I can’t walk by a crane game and not play it. But my plushies keep me company when I’m in drawing mode. My two cats Taiga and Lina also keep me company and poke me awake every day so I can feed them before they get hangry.</p>

                <p>I was always fascinated, perhaps drawn in, by characters coming to life on the page. It started when I read my first picture books, like Clifford the Big Red Dog (he’s definitely a Kaijuu). From there I was introduced to the classic 90s cartoons and films like Tom & Jerry and of course the Disney renaissance.
                My next childhood obsession came when I got swept up in the Pokemon craze, and I’ve been a lifelong fan (don’t ask how many Pikachu plushies I have…)
                As you can imagine I eventually got into anime as well, and the differences between western and eastern art styles have influenced my work ever since. Also, living in rural Japan for 2 years gave me a lot of unique perspectives on art and life in general. Nihon banzai!</p>

                <p>Art is my passion, and I always put my all into my work. I often feel like any project or commision I do can always be improved in some way, but as long as what I produce is enjoyed by those who see it, that’s what keeps me going and brings joy and fulfillment to my life.</p>
                <h3>Awards</h3>
                <p> In 2014, I was the Grand prize winner of the international 2014 LINE and Giphy Sticker Shop Contest. I received over 500,000 votes over the course of several weeks. Winning emoji design became available in LINE app and was commissioned to do more designs for the LINE app. 
                </p>
           
            </div>
        </section>
    )
}



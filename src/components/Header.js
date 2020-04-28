import React,{useState} from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    const [navOpen, setNavOpen] = useState(false)
    return (
        <div className={`${navOpen ? "nav-open": ""}`}>
                <header>
                <div className="logo">
                    <img src="http://placecorgi.com/138/25" alt="" />
                </div>
                <button 
                    className="nav-toggle" 
                    aria-label="toggle navigation"
                    onClick={(e) => setNavOpen(!navOpen)}>
                    <span className="hamburger"></span>
                </button>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to='/' className='nav__link' onClick={(e)=>setNavOpen(false)}>Home</Link>
                        </li>
                        <li className="nav__item">
                            <Link to='/DemoReel' className='nav__link' onClick={(e)=>setNavOpen(false)}>My Work</Link>
                        </li>
                        <li className="nav__item">
                            <Link to='/About' className='nav__link' onClick={(e)=>setNavOpen(false)}>About Me</Link>
                        </li>
                        <li className="nav__item">
                            <Link to='/Services' className='nav__link' onClick={(e)=>setNavOpen(false)}>My Services</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

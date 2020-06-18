import React ,{useState} from 'react'
import './stylesheets/style.css'
import './stylesheets/header.css'


export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <header>
                <div className="header-social-list">
                    <ul className="social-list">
                        <li className="social-list__item">
                            <a className="social-list__link" rel="noopener noreferrer" href="#myForm">
                                <i className="far fa-envelope"></i>
                            </a>
                        </li>
                        <li className="social-list__item">
                            <a className="social-list__link" rel="noopener noreferrer" target='_blank' href="https://twitter.com/palaciospage"><i className="fab fa-twitter-square"></i>
                            </a>
                        </li>
                        <li className="social-list__item">
                            <a className="social-list__link" rel="noopener noreferrer" target='_blank' href="https://www.instagram.com/palaciospage_art/"><i className="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li className="social-list__item">
                            <a className='social-list__link' rel="noopener noreferrer" target='_blank' href="https://www.deviantart.com/palaciospage/"><i className="fab fa-deviantart"></i></a>
                        </li>
                        <li className="social-list__item">
                            <a className='social-list__link' rel="noopener noreferrer" target='_blank' href="https://www.linkedin.com/in/palaciospage/"><i className="fab fa-linkedin"></i></a>
                        </li>
                        
                    </ul>
                </div>
                <nav>
                    <button className='showNav btn' onClick={()=> setIsOpen(!isOpen)}>Menu</button>
                    <ul className={`nav__list ${isOpen ? "show-menu": ""}`}>
                        <li className="nav__item">
                            <a className='nav__link' href='#home'>Home</a>
                        </li>
                        <li className="nav__item">
                        <a className='nav__link' href='#about'>About</a>      
                        </li>
                        <li className="nav__item">
                        <a className='nav__link' href='#services'>Services</a>
                        </li>
                        <li className="nav__item">
                        <a className='nav__link' href='#contact'>Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

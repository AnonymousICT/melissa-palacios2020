import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="footer">
            <ul className="social-list">
                <li className="social-list__item">
                    <Link className="social-list__link" to='/contactme'>
                        <i className="far fa-envelope"></i>

                    </Link>
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
            </ul>
        </footer>
    )
}


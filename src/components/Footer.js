import React from 'react'

export default function Footer() {
    return (
        <footer className="footer">
            <a href="#email" className="footer-link">MelissaPalacios@realEmail.com</a>
            <ul className="social-list">
                <li className="social-list__item">
                    <a className="social-list__link" href="google.com">
                        <i className="far fa-envelope"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="google.com">
                        <i className="fab fa-tumblr-square"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="google.com"><i className="fab fa-twitter-square"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="google.com"><i className="fab fa-instagram"></i>
                    </a>
                </li>
            </ul>
        </footer>
    )
}


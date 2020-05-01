import React from 'react'

export default function Footer() {
    return (
        <footer className="footer">
            <ul className="social-list">
                <li className="social-list__item">
                    <a className="social-list__link" href="mapalacios089@gmail.com">
                        <i className="far fa-envelope"></i>
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
                <li className="social-list__item">
                    <a className='social-list__link' href="https://www.deviantart.com/palaciospage/"><i class="fab fa-deviantart"></i></a>

                </li>
            </ul>
        </footer>
    )
}


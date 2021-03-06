

import React from 'react';
import {Link} from 'react-router-dom'
import '../css/navigatebar.css'
function Nav() {
    return (

<div className="navigate">
    <Link to='/'>
    <div className="logo">
        <svg width="70" height="60" viewBox="0 0 70 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M66.3158 50V53.3333C66.3158 57 63 60 58.9474 60H7.36842C3.27895 60 0 57 0 53.3333V6.66667C0 3 3.27895 0 7.36842 0H58.9474C63 0 66.3158 3 66.3158 6.66667V10H33.1579C29.0684 10 25.7895 13 25.7895 16.6667V43.3333C25.7895 47 29.0684 50 33.1579 50H66.3158ZM33.1579 43.3333H70V16.6667H33.1579V43.3333ZM47.8947 35C44.8368 35 42.3684 32.7667 42.3684 30C42.3684 27.2333 44.8368 25 47.8947 25C50.9526 25 53.4211 27.2333 53.4211 30C53.4211 32.7667 50.9526 35 47.8947 35Z"
                fill="white"/>
        </svg>
        <p>
            BOO-KING
        </p>
    </div></Link>
    <div className="user-links">
        <div className="wallet">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
                <svg viewBox="0 0 63 88" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 12.5C0 9.18479 1.31696 6.00537 3.66116 3.66117C6.00537 1.31696 9.18479 0 12.5 0H50C53.3152 0 56.4946 1.31696 58.8388 3.66117C61.183 6.00537 62.5 9.18479 62.5 12.5V87.5L31.25 68.75L0 87.5V12.5Z"
                    />

                </svg>
            </a>


        </div>

        <div className="profile"><Link to='/info'>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
                <svg viewBox="0 0 81 81" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M40.5 0C18.144 0 0 18.144 0 40.5C0 62.856 18.144 81 40.5 81C62.856 81 81 62.856 81 40.5C81 18.144 62.856 0 40.5 0ZM40.5 12.15C47.223 12.15 52.65 17.577 52.65 24.3C52.65 31.023 47.223 36.45 40.5 36.45C33.777 36.45 28.35 31.023 28.35 24.3C28.35 17.577 33.777 12.15 40.5 12.15ZM40.5 69.66C30.375 69.66 21.4245 64.476 16.2 56.619C16.3215 48.5595 32.4 44.145 40.5 44.145C48.5595 44.145 64.6785 48.5595 64.8 56.619C59.5755 64.476 50.625 69.66 40.5 69.66Z"
                    />
                </svg>
            </a> </Link>
        </div>

    </div>

</div>
    );
}

export default Nav;

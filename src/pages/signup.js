import React from 'react';
import '../css/login.css'
import singup from '../js/pages/singup';

function Signup() {
    return (
        <div className="login-container">

            <div id="non"></div>
            <div id="nonl"></div>
            <div className="forma">
                <div id="logo">
                    <svg width="70" height="60" viewBox="0 0 70 60" fill="#4F5B67" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M66.3158 50V53.3333C66.3158 57 63 60 58.9474 60H7.36842C3.27895 60 0 57 0 53.3333V6.66667C0 3 3.27895 0 7.36842 0H58.9474C63 0 66.3158 3 66.3158 6.66667V10H33.1579C29.0684 10 25.7895 13 25.7895 16.6667V43.3333C25.7895 47 29.0684 50 33.1579 50H66.3158ZM33.1579 43.3333H70V16.6667H33.1579V43.3333ZM47.8947 35C44.8368 35 42.3684 32.7667 42.3684 30C42.3684 27.2333 44.8368 25 47.8947 25C50.9526 25 53.4211 27.2333 53.4211 30C53.4211 32.7667 50.9526 35 47.8947 35Z "/>
                    </svg>
                </div>
                <form id="signup-form" action="/login">
                    <div className="login">
                        <div id="login_text">
                            SIGNUP
                        </div>
                        <input type="text" placeholder="Enter Username" name="uname" id="username" required></input>

                        <input type="password" placeholder="Enter Password" minLength="4" id="password" name="psw"
                               required></input>

                        <input type="password" placeholder="Confirm password" id="confirm-password"
                               name="ch_psw" required></input>
                        <button className="submit" id="submiter">singup</button>
                    </div>
                </form>
                <button id='singup-button' onClick={singup}>sing-up</button>

            </div>
            <div id="nonr"></div>
            <div id="nonf"></div>

        </div>)
        ;
}

export default Signup;
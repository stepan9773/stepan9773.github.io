import React, {useState, useEffect} from 'react';
import '../css/info.css'
import {Link} from 'react-router-dom'
import smoke from '../js/pages/smoke.js'

function Info() {
    useEffect(() => {
        fetchItems();
    }, [])

    const [items, setItems] = useState([])

    const fetchItems = async () => {
        const data = await fetch('http://127.0.0.1:5000/smoke', {
            method: 'get',
            headers: new Headers({
                'Authorization': localStorage.getItem('token')
            })

        });
        let items = await data.json();
        items = Object.values(items)
        console.log(items);
        setItems(items[0]);
    }

    return (
        <div className="info-container">


            <div className="info-content">
                <div className="person">
                    <div className="person-identety">
                        <svg viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M40.5 0C18.144 0 0 18.144 0 40.5C0 62.856 18.144 81 40.5 81C62.856 81 81 62.856 81 40.5C81 18.144 62.856 0 40.5 0ZM40.5 12.15C47.223 12.15 52.65 17.577 52.65 24.3C52.65 31.023 47.223 36.45 40.5 36.45C33.777 36.45 28.35 31.023 28.35 24.3C28.35 17.577 33.777 12.15 40.5 12.15ZM40.5 69.66C30.375 69.66 21.4245 64.476 16.2 56.619C16.3215 48.5595 32.4 44.145 40.5 44.145C48.5595 44.145 64.6785 48.5595 64.8 56.619C59.5755 64.476 50.625 69.66 40.5 69.66Z"
                                fill="white"/>
                        </svg>
                        <div className="user-info-content">
                            <p>Username
                                <svg width="100" height="100" viewBox="0 0 100 100" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M70.5813 8.08125C71.7533 6.90956 73.3427 6.25133 75 6.25133C76.6573 6.25133 78.2467 6.90956 79.4188 8.08125L91.9188 20.5813C93.0904 21.7533 93.7487 23.3427 93.7487 25C93.7487 26.6573 93.0904 28.2467 91.9188 29.4187L35.6688 85.6687C34.9845 86.3551 34.15 86.8729 33.2313 87.1813L14.4813 93.4313C13.3797 93.8001 12.1971 93.8546 11.0662 93.5886C9.9354 93.3227 8.90105 92.7469 8.07929 91.9258C7.25752 91.1047 6.68087 90.0708 6.41405 88.9401C6.14723 87.8095 6.2008 86.6269 6.56875 85.525L12.8188 66.775C13.1262 65.854 13.6441 65.0173 14.3313 64.3313L70.5813 8.08125V8.08125ZM75 12.5L87.5 25L31.25 81.25L12.5 87.5L18.75 68.75L75 12.5Z"
                                          fill="black"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M75.9125 39.7125L60.2875 24.0875L64.7125 19.6625L80.3375 35.2875L75.9188 39.7125H75.9125ZM18.75 62.5V65.625C18.75 66.4538 19.0792 67.2487 19.6653 67.8347C20.2513 68.4208 21.0462 68.75 21.875 68.75H25V71.875C25 72.7038 25.3292 73.4987 25.9153 74.0847C26.5013 74.6708 27.2962 75 28.125 75H31.25V78.125C31.25 78.9538 31.5792 79.7487 32.1653 80.3347C32.7513 80.9208 33.5462 81.25 34.375 81.25H37.5V71.875C37.5 71.0462 37.1708 70.2513 36.5847 69.6653C35.9987 69.0792 35.2038 68.75 34.375 68.75H31.25V65.625C31.25 64.7962 30.9208 64.0013 30.3347 63.4153C29.7487 62.8292 28.9538 62.5 28.125 62.5H18.75Z"
                                          fill="black"/>
                                </svg>

                            </p>
                            <p>E-mail</p>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="person-function">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a>
                            <div className="function" onClick={smoke}>
                                smoke
                            </div>

                        </a>
                        <Link to='/'>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a>
                                <div className="function">
                                    buy tickets
                                </div>
                            </a>
                        </Link>
                        <Link to='/product'>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a>
                                <div className="function">
                                    your tickets
                                </div>
                            </a>
                        </Link>
                        <Link to='/list'>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a>
                                <div className="function">
                                    list of user
                                </div>
                            </a></Link>

                        <Link to='/signup'>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a>
                                <div className="function">
                                    signup
                                </div>
                            </a></Link>
                        <Link to='/login'>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a>
                                <div id="logout" className="function">
                                    Logout
                                </div>
                            </a></Link>

                    </div>
                </div>
                <div className="fields">
                    <div className="title">
                        INFO
                    </div>
                    <div className="field">
                        <p>name:</p>
                        <p>{items.username}</p>
                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M70.5813 8.08125C71.7533 6.90956 73.3427 6.25133 75 6.25133C76.6573 6.25133 78.2467 6.90956 79.4188 8.08125L91.9188 20.5813C93.0904 21.7533 93.7487 23.3427 93.7487 25C93.7487 26.6573 93.0904 28.2467 91.9188 29.4187L35.6688 85.6687C34.9845 86.3551 34.15 86.8729 33.2313 87.1813L14.4813 93.4313C13.3797 93.8001 12.1971 93.8546 11.0662 93.5886C9.9354 93.3227 8.90105 92.7469 8.07929 91.9258C7.25752 91.1047 6.68087 90.0708 6.41405 88.9401C6.14723 87.8095 6.2008 86.6269 6.56875 85.525L12.8188 66.775C13.1262 65.854 13.6441 65.0173 14.3313 64.3313L70.5813 8.08125V8.08125ZM75 12.5L87.5 25L31.25 81.25L12.5 87.5L18.75 68.75L75 12.5Z"
                                  fill="black"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M75.9125 39.7125L60.2875 24.0875L64.7125 19.6625L80.3375 35.2875L75.9188 39.7125H75.9125ZM18.75 62.5V65.625C18.75 66.4538 19.0792 67.2487 19.6653 67.8347C20.2513 68.4208 21.0462 68.75 21.875 68.75H25V71.875C25 72.7038 25.3292 73.4987 25.9153 74.0847C26.5013 74.6708 27.2962 75 28.125 75H31.25V78.125C31.25 78.9538 31.5792 79.7487 32.1653 80.3347C32.7513 80.9208 33.5462 81.25 34.375 81.25H37.5V71.875C37.5 71.0462 37.1708 70.2513 36.5847 69.6653C35.9987 69.0792 35.2038 68.75 34.375 68.75H31.25V65.625C31.25 64.7962 30.9208 64.0013 30.3347 63.4153C29.7487 62.8292 28.9538 62.5 28.125 62.5H18.75Z"
                                  fill="black"/>
                        </svg>
                    </div>
                    <div className="field">
                       <p>purcheses:</p>
                        <p>{items.count}</p>
                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M70.5813 8.08125C71.7533 6.90956 73.3427 6.25133 75 6.25133C76.6573 6.25133 78.2467 6.90956 79.4188 8.08125L91.9188 20.5813C93.0904 21.7533 93.7487 23.3427 93.7487 25C93.7487 26.6573 93.0904 28.2467 91.9188 29.4187L35.6688 85.6687C34.9845 86.3551 34.15 86.8729 33.2313 87.1813L14.4813 93.4313C13.3797 93.8001 12.1971 93.8546 11.0662 93.5886C9.9354 93.3227 8.90105 92.7469 8.07929 91.9258C7.25752 91.1047 6.68087 90.0708 6.41405 88.9401C6.14723 87.8095 6.2008 86.6269 6.56875 85.525L12.8188 66.775C13.1262 65.854 13.6441 65.0173 14.3313 64.3313L70.5813 8.08125V8.08125ZM75 12.5L87.5 25L31.25 81.25L12.5 87.5L18.75 68.75L75 12.5Z"
                                  fill="black"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M75.9125 39.7125L60.2875 24.0875L64.7125 19.6625L80.3375 35.2875L75.9188 39.7125H75.9125ZM18.75 62.5V65.625C18.75 66.4538 19.0792 67.2487 19.6653 67.8347C20.2513 68.4208 21.0462 68.75 21.875 68.75H25V71.875C25 72.7038 25.3292 73.4987 25.9153 74.0847C26.5013 74.6708 27.2962 75 28.125 75H31.25V78.125C31.25 78.9538 31.5792 79.7487 32.1653 80.3347C32.7513 80.9208 33.5462 81.25 34.375 81.25H37.5V71.875C37.5 71.0462 37.1708 70.2513 36.5847 69.6653C35.9987 69.0792 35.2038 68.75 34.375 68.75H31.25V65.625C31.25 64.7962 30.9208 64.0013 30.3347 63.4153C29.7487 62.8292 28.9538 62.5 28.125 62.5H18.75Z"
                                  fill="black"/>
                        </svg>
                    </div>


                </div>
            </div>
        </div>


    )
        ;
}

export default Info;

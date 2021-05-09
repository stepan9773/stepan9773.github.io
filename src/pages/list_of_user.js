import React, {useState, useEffect} from 'react';
import '../css/list_of_user.css'
import $ from "jquery";

function List_of_user() {

    useEffect(() => {
        fetchItems();
    }, [])

    const [items, setItems] = useState([])

    const fetchItems = async () => {
        const data = await fetch('http://127.0.0.1:5000/user', {
            method: 'get',
            headers: new Headers({
                'Authorization': localStorage.getItem('token')
            })

        });
        let items = await data.json();
        items = Object.values(items)
        console.log(items);
        setItems(items);
    }


    return (
        <div className="list-container">
            <div className="list-of-user">
                <div className="search">
                    <form>
                        <label htmlFor="fname">user name:</label>
                        <input type="text" id="fname" name="fname"></input>
                        <label htmlFor="lname">email:</label>
                        <input type="text" id="lname" name="lname"></input>
                    </form>
                </div>
                <div className="list">
                    <div className="head">
                        <div> user name</div>

                        <div> admin/guest</div>
                        <div> count of ticket</div>
                        <div> money</div>

                    </div>
                    {items.map((item) => {
                        return (
                            <div className="user">
                                <div> {item.username}</div>
                                <div> {(item.admin == null ? 0 : 1) }</div>
                                <div> {(item.count)}</div>

                                <div> {(Math.floor(Math.random() * 10000))}</div>
                                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M70.5813 8.08125C71.7533 6.90956 73.3427 6.25133 75 6.25133C76.6573 6.25133 78.2467 6.90956 79.4188 8.08125L91.9188 20.5813C93.0904 21.7533 93.7487 23.3427 93.7487 25C93.7487 26.6573 93.0904 28.2467 91.9188 29.4187L35.6688 85.6687C34.9845 86.3551 34.15 86.8729 33.2313 87.1813L14.4813 93.4313C13.3797 93.8001 12.1971 93.8546 11.0662 93.5886C9.9354 93.3227 8.90105 92.7469 8.07929 91.9258C7.25752 91.1047 6.68087 90.0708 6.41405 88.9401C6.14723 87.8095 6.2008 86.6269 6.56875 85.525L12.8188 66.775C13.1262 65.854 13.6441 65.0173 14.3313 64.3313L70.5813 8.08125V8.08125ZM75 12.5L87.5 25L31.25 81.25L12.5 87.5L18.75 68.75L75 12.5Z"
                                          fill="black"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M75.9125 39.7125L60.2875 24.0875L64.7125 19.6625L80.3375 35.2875L75.9188 39.7125H75.9125ZM18.75 62.5V65.625C18.75 66.4538 19.0792 67.2487 19.6653 67.8347C20.2513 68.4208 21.0462 68.75 21.875 68.75H25V71.875C25 72.7038 25.3292 73.4987 25.9153 74.0847C26.5013 74.6708 27.2962 75 28.125 75H31.25V78.125C31.25 78.9538 31.5792 79.7487 32.1653 80.3347C32.7513 80.9208 33.5462 81.25 34.375 81.25H37.5V71.875C37.5 71.0462 37.1708 70.2513 36.5847 69.6653C35.9987 69.0792 35.2038 68.75 34.375 68.75H31.25V65.625C31.25 64.7962 30.9208 64.0013 30.3347 63.4153C29.7487 62.8292 28.9538 62.5 28.125 62.5H18.75Z"
                                          fill="black"/>
                                </svg>
                            </div>
                        );
                    })}


                </div>
            </div>
        </div>);
}

export default List_of_user;

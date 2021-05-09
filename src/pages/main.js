import React from 'react';
import '../css/index.css'

function Main() {
    return (

        <div className="index-container">


            <div id="label">

                {/* eslint-disable-next-line no-script-url */}
                <div className="item" onClick="javascript:window.location.href='#art-link' ">
                    <p>
                        ART
                    </p>

                </div>
                {/* eslint-disable-next-line no-script-url */}
                <div className="item" onClick="javascript:window.location.href='#vocation-link' ">
                    <p>
                        vocation
                    </p>
                </div>
                {/* eslint-disable-next-line no-script-url */}
                <div className="item" onClick="javascript:window.location.href='#sport-link' ">
                    <p>
                        sport
                    </p>
                </div>
            </div>
            <div id="new">
                <p>
                    NEW
                </p>
                <div className="new_content row">
                    <div className="new_item col"></div>
                    <div className="new_item col"></div>
                    <div className="new_item col"></div>
                    <div className="new_item col"></div>
                    <div className="new_item col"></div>
                </div>

            </div>
            <div id="art">
                <p id="art-link">
                    art
                </p>
                <div className="big"></div>
                <div className="ticket_1"></div>
                <div className="ticket_2"></div>
                <div className="ticket_3"></div>
                <div className="ticket_4"></div>
            </div>
            <div id="vocation">
                <p id="vocation-link">
                    vocation
                </p>
                <div className="big"></div>
                <div className="ticket_1"></div>
                <div className="ticket_2"></div>
                <div className="ticket_3"></div>
                <div className="ticket_4"></div>
            </div>
            <div id="sport">
                <p id="sport-link">
                    sport
                    <div className="big"></div>
                    <div className="ticket_1"></div>
                    <div className="ticket_2"></div>
                    <div className="ticket_3"></div>
                    <div className="ticket_4"></div>

                </p>
            </div>
            <div id="foot-hiden">
                <p>
                    hiden
                </p>
            </div>
        </div>

    );
}

export default Main;
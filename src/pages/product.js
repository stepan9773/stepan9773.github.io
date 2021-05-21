import React from 'react';
import '../css/product.css'
import { book,buy } from '../js/pages/product';
import $ from 'jquery'
function Product() {
    $(document).ready(() => {
        // eslint-disable-next-line
        $('#seat').text((Math.floor(Math.random() * 1000)));
    });
    return (
        <div className="product-container">
            <div className="product-label">
                <div className="image-holder">

                </div>
                <div className="text-holder">
                    <p className="title" id="title">THE best bootstrap comedy site</p>
                    <p className="product-data">12/12/2021 at <span id="seat"> </span>
                    </p>
                    <p className="prise">
                        <span id="price">200</span> EUR
                    </p>
                </div>
                <div className="buy-holder">
                    <button className="pay-button" onClick={buy}>buy</button>
                    <button className="pay-button" onClick={book}>book</button>
                </div>
                <div className="bg-holder"></div>
            </div>
            <div className="description row">
                <h1 className="col-xs-12 col-sm-12">
                    description
                </h1>
                <p className="col-xs-5 col-sm-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="col-xs-7 col-sm-7 ">
                    <div className="row">

                        <div className="col-12">
                            <h3>Entertament</h3>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-12">
                            <h3>Special</h3>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-12">
                            <h3>Info</h3>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                    <div className="row justify-center">
                        <div className="col-12 align-self-center">
                            <h3>Place Left</h3>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="footer">

            </div>
        </div>

    )
        ;
}



export default Product;

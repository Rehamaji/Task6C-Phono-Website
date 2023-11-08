import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './subscripeNow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

const SubscripeNow = () => {
    return (
        <div className="">
                <div className="bgBlue pt-5 pb-5">
                    <div className="d-flex flex-column justify-content-center">
                        <p className="card-text text-center pt-3 fw-600 fs14 colorRose">
                            SUBSCRIBE NOW</p>
                        <h1 className="text-center colorWhite pt-3">GET OUR UPDATES ALWAYS FAST</h1>
                        <p className="card-text text-center fw-600 pt-5 fs14 colorWhite">YOUR PERSONAL DATA WILL ALWAYS BE SAFE</p>
                        <div className="input-group d-flex justify-content-center pt-5">
                            <div className="input-group input-group-lg mb-3 w-50 ">
                                <input type="text" className="form-control radius30 position-relative px-3 py-3" placeholder="Recipient's username"
                                       aria-label="Recipient's username" aria-describedby="inputGroup-sizing-lg"/>
                    <span className="input-group-text w-fit ButtonCycle radius30 bgBlue colorWhite px-3 py-3 w-fit"
                          id="inputGroup-sizing-lg">
                        <FontAwesomeIcon icon={faBuildingCircleArrowRight}/>

                    </span>
                            </div>
                        </div>
                        <div className="row w100 justify-content-center pt-5 m-0">
                            <p className="col-md-1 col-sm-12 transition cursor colorWhite block hov">SEARCH</p>
                            <p className="col-md-1 col-sm-12 transition cursor colorWhite block hov">HELP </p>
                            <p className="col-md-2 col-sm-12 transition cursor colorWhite block hov">INFORMATION </p>
                            <p className="col-md-2 col-sm-12 transition cursor colorWhite block hov">PRIVACY POLICY </p>
                            <p className="col-md-2 col-sm-12 transition cursor colorWhite hov ">SHIPPING DETAILS</p>
                        </div>
                    </div>
                </div>
        </div>
            );
 }
export default SubscripeNow;

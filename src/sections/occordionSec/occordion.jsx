import './occordion.css';
import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Iphone14 from '../../assets/images/iphone14.png'
import Headers from "../../component/headers/headers";
function AccordionSec() {
    return (
        <div className="bgBlue pt-5 pb-5 ">
            <div className="w-100 text-center">
                <Headers first="SEE WHY CUSTOMERS LOVE THE OUR MOBILES" second="SHOW YOURS TO THE WORLD" className1="colorWhite" className2="colorWhite" className3="colorWhite"/>

                <div className="row w-100">
                <div className="col-lg-5 txt-center">
                    <img src={Iphone14}
                         alt="" loading="lazy" width="1023" height="1018" className="mx-auto mw-100 h-auto"/>
                </div>
                <div className="col-lg-6 bg-transparent my-auto">
                    <Accordion defaultActiveKey="0" className="bg-transparent">
                        <Accordion.Item eventKey="0" className="bg-transparent">
                            <Accordion.Header className="bg-transparent my-header">Accordion Item #1</Accordion.Header>
                            <Accordion.Body className="colorWhite bg-transparent">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className="bg-transparent">
                            <Accordion.Header className="bg-transparent my-header">Accordion Item #2</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className="bg-transparent">
                            <Accordion.Header className="bg-transparent my-header">Accordion Item #3</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className="bg-transparent">
                            <Accordion.Header className="bg-transparent my-header">Accordion Item #4</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AccordionSec;
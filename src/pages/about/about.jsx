import './about.css';
import React from 'react';
import Card1 from "../../component/card/card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Contests = () => {
    return (

        <div className="mt-10 pt-5">
            <h5 className="colorBlue text-center  pt-5">RECENTLY ADDED CONTESTS BY USERS</h5>
            <h1 className="text-center">Current <span className="colorBlue">Contests</span> To Enter Now & <span
                className="colorBlue"> Win</span></h1>
            <div className="mx-5 mt-5">
                <Row>
                    <Col lg={3} md={6} sm={12} className="d-flex justify-content-md-around mb-2">
                        <Card1/>
                    </Col>
                    <Col lg={3} md={6} sm={12} className="d-flex justify-content-md-around mb-2">
                        <Card1/>
                    </Col>
                    <Col lg={3} md={6} sm={12} className="d-flex justify-content-md-around mb-2">
                        <Card1/>
                    </Col>
                    <Col lg={3} md={6} sm={12} className="d-flex justify-content-md-around mb-2">
                        <Card1/>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default Contests;
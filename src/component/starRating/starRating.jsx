// src/components/StarRating.js
import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './starRating.css'; // You will create this CSS file

const StarRating = ({rating}) => {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="rating">
                        {[1, 2, 3, 4, 5].map((star, index) => {
                            return (
                                <span
                                    key={index}
                                    className={`star ${index >= rating ? 'colored' : ''}`}
                                >
                                   {index < rating ? '★' : '☆'}
                                </span>
                            );
                        })}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default StarRating;

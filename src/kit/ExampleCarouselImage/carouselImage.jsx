import React from 'react';
import './carouselImage.css';

const CarouselImage = ({ title = 'Placeholder', text, src }) => (
    <div>
        <img
            src={src}
            alt={`${title}: ${text}`}
            className="bd-placeholder-img carousel-img"
        />
    </div>
);

CarouselImage.displayName = 'CarouselImage';

export default CarouselImage;


import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardCaro from "../cardCaro/cardCaro";

function CarouselCom() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products/category/smartphones');
            setData(response.data.products);
            console.log('data from axios', response.data.products);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };

    return (
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            /*autoPlay={true}*/
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="transform 500ms ease-in-out"
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {data.map((product) => (
                <div key={product.id}>
                    <CardCaro
                        image={product.images[0]} // Assuming image is a property of the product object
                        title={product.title}
                        rating={Math.ceil(product.rating)}
                        before={product.price}
                    />
                </div>
            ))}
        </Carousel>
    );
}

export default CarouselCom;
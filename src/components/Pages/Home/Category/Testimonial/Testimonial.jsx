import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../../SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";



const Testimonial = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])
    return (
        <section>
            <SectionTitle
                subHeading={"--- What Our Clients Say ---"}
                heading={"testimonials"}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper text-center p-10">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className='p-24'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                                className='mx-auto mb-3'
                            />
                            <p>{review.details}</p>
                            <h2 className='text-3xl text-[#CD9003]'>{review.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonial;
import React from 'react';
import Banner from '../Banner/Banner';
import Category from './Category/Category';
import PopularMenu from '../../PopularMenu/PopularMenu';
import FeaturedItems from '../../FeaturedItems/FeaturedItems';
import Testimonial from './Category/Testimonial/Testimonial';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
            <title>Bistro Boss | Hone</title>
            </Helmet>
            <Banner/>
            <Category/>
            <PopularMenu/>
            <FeaturedItems/>
            <Testimonial/>
        </div>
    );
};

export default Home;
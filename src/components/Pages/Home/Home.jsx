import React from 'react';
import Banner from '../Banner/Banner';
import Category from './Category/Category';
import PopularMenu from '../../PopularMenu/PopularMenu';
import FeaturedItems from '../../FeaturedItems/FeaturedItems';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <PopularMenu/>
            <FeaturedItems/>
        </div>
    );
};

export default Home;
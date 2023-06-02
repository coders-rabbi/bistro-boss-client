import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import menuimg from "../../../assets/menu/banner3.jpg"
import PopularMenu from '../../PopularMenu/PopularMenu';


const Menu = () => {
    return (
        <div>
            <Helmet>
            <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuimg} title="our menu"></Cover>
            <PopularMenu/>
            <Cover img={menuimg} title="our menu"></Cover>
            <PopularMenu/>
            <Cover img={menuimg} title="our menu"></Cover>
            <PopularMenu/>
        </div>
    );
};

export default Menu;
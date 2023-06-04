import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import menuimg from "../../../assets/menu/banner3.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../../SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            {/* Helmet use for browser title */}
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>

            {/* Menu banner section  */}
            <Cover img={menuimg} title="our menu"></Cover>
            {/* Main Cover */}
            <SectionTitle
                subHeading="don't miss" heading="Today's Offer"
            ></SectionTitle>
            {/* Offered menu section  */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu section  */}
            <MenuCategory items={desserts} title="Dessert" img={dessertImg}></MenuCategory>
            <MenuCategory items={pizza} title="Pizza" img={pizzaImg}></MenuCategory>
            <MenuCategory items={salad} title="Salad" img={saladImg}></MenuCategory>
            <MenuCategory items={soup} title="Soup" img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;
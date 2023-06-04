import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import PopularCard from './PopularCard';
import useMenu from '../Hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    console.log(menu);
    const popular = menu.filter(item => item.category === 'popular');


    return (
        <section className='mb-12'>
            <SectionTitle
                subHeading={"--- Check out ---"}
                heading={"Form our menu"}
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-6'>
                {
                    // Popular Card or MenuItem 
                    popular.map(item => <PopularCard
                        key={popular._id}
                        items={item}
                    ></PopularCard>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;
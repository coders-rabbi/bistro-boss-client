import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import PopularCard from './PopularCard';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const populerItems = data.filter(item => item.category === 'popular')
                console.log(populerItems);
                setMenu(populerItems)
            })
    }, [])


    return (
        <section className='mb-12'>
            <SectionTitle
                subHeading={"--- Check out ---"}
                heading={"Form our menu"}
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-6'>
                {
                    menu.map(popular => <PopularCard
                        key={popular._id}
                        popular={popular}
                    ></PopularCard>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;
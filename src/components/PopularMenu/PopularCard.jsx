import React from 'react';

const PopularCard = ({ popular }) => {
    const { name, image, price, recipe } = popular;
    return (
        <div className='flex items-center gap-4'>
            <img className='w-[118px] h-[104px]' style={{ borderRadius: '0px 200px 200px 200px' }} src={image} alt="" />
            <div>
                <div className='flex justify-between'>
                    <h3>{name} ---------------</h3>
                    <p>{price}</p>
                </div>
                <p>{recipe}</p>
            </div>
        </div>
    );
};

export default PopularCard;
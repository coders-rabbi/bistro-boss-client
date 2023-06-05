import React from 'react';

const FoodCard = ({ items }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={items?.image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{items?.name}</h2>
                <p>{items?.recipe}</p>
                <p>Price: {items?.price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-primary bg-gray-100 border-0 border-b-4 mx-auto">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
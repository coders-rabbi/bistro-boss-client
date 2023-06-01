import React from 'react';

const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div className='text-center w-1/3 mx-auto mb-10'>
            <p className='text-2xl border-b-4 border-b-[D9D9D9] py-3'>{subHeading}</p>
            <p className='text-5xl uppercase border-b-4 border-b-[D9D9D9] py-3 mt-3'>{heading}</p>
        </div>
    );
};

export default SectionTitle;
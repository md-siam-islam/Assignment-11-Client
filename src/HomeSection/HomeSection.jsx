import React from 'react';
import Banner from '../Components/Banner/Banner';
import BookCategories from '../Components/BookCategories/BookCategories';

const HomeSection = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Banner></Banner>
            <BookCategories></BookCategories>
        </div>
    );
};

export default HomeSection;
import React from 'react';
import Banner from '../Components/Banner/Banner';
import BookCategories from '../Components/BookCategories/BookCategories';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const HomeSection = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Helmet>
                <title>Home!</title>
            </Helmet>
            <Banner></Banner>
            <BookCategories></BookCategories>
        </div>
    );
};

export default HomeSection;
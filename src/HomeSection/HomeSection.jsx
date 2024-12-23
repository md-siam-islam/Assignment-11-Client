import React from 'react';
import Banner from '../Components/Banner/Banner';
import BookCategories from '../Components/BookCategories/BookCategories';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import BenefitsOfReading from '../Page/BenefitsOfReading/BenefitsOfReading';
import ChallengesOfReading from '../Page/ChallengesOfReading/ChallengesOfReading';

const HomeSection = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Helmet>
                <title>Home!</title>
            </Helmet>
            <Banner></Banner>
            <BenefitsOfReading></BenefitsOfReading>
            <BookCategories></BookCategories>
            <ChallengesOfReading></ChallengesOfReading>
        </div>
    );
};

export default HomeSection;
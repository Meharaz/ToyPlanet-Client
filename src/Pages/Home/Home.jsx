import React from 'react';
import Banner from '../../Components/Banner/Banner';
import ToyGallery from './ToyGallery';
import Category from './Category';

const Home = () => {
    return (
        <div>
            <Banner/>
            <ToyGallery/>
            <Category/>
        </div>
    );
};

export default Home;
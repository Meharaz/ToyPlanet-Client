import React from 'react';
import Home from '../Pages/Home/Home';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;
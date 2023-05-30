import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Pages/Shared/Footer';
import NavBar from '../components/Pages/Shared/NavBar/NavBar';

const Root = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;
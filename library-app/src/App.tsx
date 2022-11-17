import React from 'react';
import Navbar from "./layouts/Navbar";
import './App.scss';
import ExploreTopBooks from "./layouts/HomePage/components/ExploreTopBooks";
import Carousel from "./layouts/HomePage/components/Carousel";
import Heros from "./layouts/HomePage/components/Heros";
import LibraryServices from "./layouts/HomePage/components/LibraryServices";
import Footer from "./layouts/Footer";
import {HomePage} from "./layouts/HomePage/HomePage";

function App() {
    return (
        <>
            <Navbar/>
            <HomePage/>
            <Footer/>
        </>
    );
}

export default App;

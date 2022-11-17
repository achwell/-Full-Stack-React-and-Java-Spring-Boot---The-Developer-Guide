import React from 'react';
import Navbar from "./layouts/Navbar";
import './App.scss';
import ExploreTopBooks from "./layouts/HomePage/components/ExploreTopBooks";
import Carousel from "./layouts/HomePage/components/Carousel";
import Heros from "./layouts/HomePage/components/Heros";
import LibraryServices from "./layouts/HomePage/components/LibraryServices";
import Footer from "./layouts/Footer";

function App() {
    return (
        <>
            <Navbar/>
            <ExploreTopBooks/>
            <Carousel/>
            <Heros/>
            <LibraryServices/>
            <Footer/>
        </>
    );
}

export default App;

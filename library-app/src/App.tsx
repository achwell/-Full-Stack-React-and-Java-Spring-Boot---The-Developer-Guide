import React from 'react';
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import {HomePage} from "./layouts/HomePage/HomePage";
import SearchBooksPage from "./layouts/SearchBooksPage/SearchBooksPage";

import './App.scss';

function App() {
    return (
        <>
            <Navbar/>
            <SearchBooksPage/>
            {/*<HomePage/>*/}
            <Footer/>
        </>
    );
}

export default App;

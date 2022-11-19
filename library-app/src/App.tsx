import {Navigate, Route, Routes} from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import BookCheckoutPage from "./layouts/BookCheckoutPage/BookCheckoutPage";
import HomePage from "./layouts/HomePage/HomePage";
import SearchBooksPage from "./layouts/SearchBooksPage/SearchBooksPage";

import './App.scss';

function App() {
    return (
        <div className='d-flex flex-column min-vh-100'>
            <Navbar/>
            <div className="flex-grow-1">
                <Routes>
                    <Route path="/search" element={<SearchBooksPage/>}/>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path='/checkout/:bookId' element={<BookCheckoutPage/>}/>
                    <Route path="/" element={<Navigate replace to="/home"/>}></Route>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;

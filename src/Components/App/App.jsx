import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import  '../style.css'
import { Page1, Page2, Page3, Main, Header } from '../../pages';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Header />}>
                    <Route path='/' element={<Main />} />
                    <Route path='/page1' element={<Page1/>} />
                    <Route path='/page2' element={<Page2 />} />
                    <Route path='/page3' element={<Page3 />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;

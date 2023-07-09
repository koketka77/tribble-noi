import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Page1 from '../Page1/Page1';
import Page2 from '../Page2/Page2';
import Page3 from '../Page3/Page3';


const Main = () => {
    return (
        <div className='picwrapper'>
            
            <Link to='/page1'><div className='pic1'><img src="https://cdn.pixabay.com/photo/2016/10/15/05/02/girls-1741925_1280.jpg" alt="" /></div></Link>
            <Link to='/page2'><div className='pic1'><img src="https://cdn.pixabay.com/photo/2016/10/15/05/02/girls-1741925_1280.jpg" alt="" /></div></Link>
            <Link to='/page3'><div className='pic1'><img src="https://cdn.pixabay.com/photo/2016/10/15/05/02/girls-1741925_1280.jpg" alt="" /></div></Link>

        </div>
    );
}

export default Main;

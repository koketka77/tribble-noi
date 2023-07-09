import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
    return (
        <div>
            <div className='wrapper'>
                <h1>Here is logo</h1>
                <div className='tags'>
                    <ul>
                        <Link to='/'>
                            <li>Home</li>
                        </Link>

                        <Link to='/'>
                            <li>About Us</li>

                        </Link>

                        <Link to='/'>
                            <li>Contact</li>

                        </Link>

                        <Link to='/'>
                            <li>News</li>

                        </Link>

                        <Link to='/'>
                            <li>Services</li>

                        </Link>

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HeaderComponent;

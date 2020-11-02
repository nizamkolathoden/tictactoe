import React from 'react';
import '../Styles/Button.css';
import {Link} from 'react-router-dom';
const Button = () => {
    return (
        <div>
            
            <div className='container'>
            <Link to = '/play'><button className='play' >PLAY</button></Link>
            <Link to = '/htp'><button className='htp' >HOW TO PLAY</button></Link>
            <Link to = '/about'><button className='about' >ABOUT</button></Link>
            </div>
        </div>
    );
};

export default Button;
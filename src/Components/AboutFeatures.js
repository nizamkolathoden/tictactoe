import React from 'react';
import '../Styles/AboutFeatures.css'
import {Link} from 'react-router-dom';
const AboutFeatures = () => {
    return (
        <div>
            <h3 className="ABOUT">ABOUT</h3>
            <div className='container1'>
            <h5 className="designer">Designer</h5>
            <p className="dm">Mohamed shibin</p>
            <h5 className="developer">Developers</h5>
            <p className="Dm">Mohamed nizam</p>
            <p className="Dm">Mohamed shibin</p>
            <p className="Dm">Mohamed Shameem</p>
            <Link to = '/'><button className='back' >BACK</button></Link>
            </div>
        </div>
    );
};

export default AboutFeatures;
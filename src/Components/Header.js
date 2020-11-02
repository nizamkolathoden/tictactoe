import React from 'react';
import '../Styles/Header1.css'

const Header = () => {
    return (
        <div>
         {/*headerone*/}
          <header>
          <h3><span className="tic">Tic</span><span className="tac"> Tac</span><span className='toe'> Toe</span></h3>  
          </header>
        </div>
    );
};

export default Header;
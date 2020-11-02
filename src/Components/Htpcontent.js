import React from 'react';
import { BiCircle } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import {Link} from 'react-router-dom';
import '../Styles/Htpcontent.css';

const Htpcontent = () => {
    return (
        <div>
            <h3 className="htphead">HOW TO PLAY</h3>
            <div className="htpcontainer">
            <h4 className="htpsechead">Rules For Tic-Tac-Toe</h4>
            <p className="htpcontent">
            1. The game is played on a grid that's 3 squares by 3 squares.<br/>
            2. You are <ImCross className="cross"/>, your freind is <BiCircle className="circle"/>. Players take turns putting their marks in empty squares.<br/>
            3. The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.<br/>
            4. When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.
            </p>
            <Link to = '/'><button className='htpback' >BACK</button></Link>
            </div>
        </div>
    );
};

export default Htpcontent;
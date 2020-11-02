import React,{useState,useContext} from "react";
import { ImCross } from "react-icons/im";
import { BiCircle } from "react-icons/bi";
import {Link} from 'react-router-dom'
import "../Styles/Name.css";
import {Player} from './Context'


const Name = () => {
  const{player1,player2,setPlayer1,setPlayer2} = useContext(Player)
  // console.log("player1:",player1,"player2:",player2)
    
  return (
    <div>
      <h3 className="playhead">PLAY</h3>
      <div className="playcontainer">
        <div className="fp">
          <input
            type="text"
            className="fpName"
            name="Firstplayer"
            placeholder="First player name"
            maxLength="12"
            value={player1}
            required
            onChange={(e)=>{setPlayer1(e.target.value)}}
            
          />
          <div className="crBox">
            <ImCross className="namecross" />
          </div>
        </div>
        <div className="sp">
          <input
            type="text"
            className="spName"
            name="Firstplayer"
            placeholder="Second player name"
            maxLength="12"
            value={player2}
            required
            onChange={(e)=>setPlayer2(e.target.value)}
          />
          <div className="ciBox">
            <BiCircle className="namecircle"/>
          </div>
        </div>
       <Link to="/game"> <input type="submit" value="NEXT" className="nextplay" /></Link>
      </div>
    </div>
  );
};

export default Name;

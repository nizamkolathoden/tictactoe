import React,{useContext,useState} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import {Player} from './Context';
import Icons from "./Icon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../Styles/Playboard.css';
const itemArray = new Array(9).fill("empty");


const PlayBoard = () => {
    //var
    const{player1,player2} = useContext(Player);
    const [cross, setCross] = useState(false);
    const [winner,setWinner] = useState("");
//


const Restart = () => {
    itemArray.fill("empty", 0, 9)
    setCross (false)
    setWinner("")

  };
const isWinner = () => {
        if(itemArray[0] === itemArray[1] && 
         itemArray[0] === itemArray[2] &&
         itemArray[0] !== "empty"){
         setWinner(`${itemArray[0]} wins`)
       
         } else if (itemArray[3] === itemArray[4] && 
           itemArray[4] === itemArray[5] &&
           itemArray[3] !== "empty"){
             setWinner(`${itemArray[3]} wins`)
       
         } else if (itemArray[6] === itemArray[7] && 
           itemArray[7] === itemArray[8] &&
           itemArray[6] !== "empty"){
             setWinner(`${itemArray[6]} wins`)
       
         }else if(itemArray[0] === itemArray[3] && 
           itemArray[3] === itemArray[6] &&
           itemArray[0] !== "empty"){
             setWinner(`${itemArray[0]} wins`)
       
         }else if(itemArray[1] === itemArray[4] && 
           itemArray[4] === itemArray[7] &&
           itemArray[1] !== "empty"){
             setWinner(`${itemArray[1]} wins`)
       
         }else if(itemArray[2] === itemArray[5] && 
           itemArray[5] === itemArray[8] &&
           itemArray[2] !== "empty"){
            setWinner(`${itemArray[2]} wins`)
         }else if(itemArray[0] === itemArray[4] && 
           itemArray[4] === itemArray[8] &&
           itemArray[0] !== "empty"){
            setWinner(`${itemArray[0]} wins`)
       
         }else if(itemArray[2] === itemArray[4] && 
           itemArray[4] === itemArray[6] &&
           itemArray[4] !== "empty"){
           setWinner(`${itemArray[2]} wins`)
         }else if(itemArray[0] !== "empty" && itemArray[1]!=="empty" && 
          itemArray[2] !=="empty" &&itemArray[3]!=="empty" &&
          itemArray[4]!=="empty" && itemArray[5]!=="empty" && 
          itemArray[6]!=="empty" && itemArray[7]!=="empty"&&
          itemArray[8]!=="empty"){
          setWinner(`Tie`)
          console.log("tie")
          }
         };
       
    
    const changeItem = (itemNumber) => {
        if(winner){
          return toast(winner, {type : 'success'})
        }
          if (itemArray[itemNumber] === "empty") {
            itemArray[itemNumber] = cross ? "Cross":"Circle" 
            setCross(!cross)
          }
          else{
            return toast("Already filled", {type : 'error'})
          }
          isWinner()
      };
    
    return (
        <div>
            <Header/>
            <div className="playboard-con">
            <h3 className="turnsMessage">
           {cross ? (<span className="player1Headers">{player1}</span>): (<span className="player2Headers">{player2}</span>)} turn</h3>
            <div className="maincontainer">
            <p className="playershow"> <span className ="playeronename">{player1}</span> VS <span className ="playertwoname">{player2}</span></p>
            <div className="smcontainer">
            <div className="colcontainer">
            {itemArray.map((item,index)=>(
                (<div className="col col1" onClick = {() => changeItem(index)}><Icons name={item}/></div>)
            ))}
        
        </div>  
            </div>
            </div>
            {winner ? (
                <div className="restartButton">
                <Link to="/"><button className='HomeButtons'>HOME</button></Link>
                <button className='reButton' onClick={Restart}>RESTART</button>
                </div>
        ):""}
            </div>
            <ToastContainer className="toasting" />
            <Footer/>
        </div>
    );
};


export default PlayBoard;

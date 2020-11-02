import React,{useState} from 'react';
import Home from './Components/Home'
import './App.css'
import About from './Components/About';
import Htp from './Components/Htp';
import {BrowserRouter,Route} from 'react-router-dom';
import Playname from './Components/Playname';
import PlayBoard from './Components/PlayBoard';
import {Player} from './Components/Context'
import Music from './Components/Music'
const App = () => {
  const [player1,setPlayer1] = useState('Player1');
  const [player2,setPlayer2] = useState('Player2');
  return (
    <div>
         <Music/>
       <BrowserRouter>
       <Player.Provider value={{player1,setPlayer1,player2,setPlayer2}}>
      <Route exact path="/">
      <Home/>  
      </Route>
      
      <Route path = "/about">
        <About/>
      </Route>
      
      <Route path = "/htp">
        <Htp/>
      </Route>
      <Route path = "/play">
      <Playname/>
    </Route>
    <Route path = "/game">
      <PlayBoard/>
    </Route>
    </Player.Provider>
      </BrowserRouter>
    </div>
  );
};
export default App;
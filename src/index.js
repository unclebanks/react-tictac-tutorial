import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { NavBar } from './components/NavBar';
import { Board } from './components/Board';  
import { Settings } from './components/Settings';

class Game extends React.Component {
    render() {
        return (
        <div className="game">
            <NavBar />
            <div className="game-board">
            <Board />
            </div>
            <Settings />
        </div>
        );
    }
}
  
  // ========================================
  
ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
  
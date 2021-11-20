import React from "react";
import '../styles/navbar.css';

export function NavBar() {
    return(
        <div id="navbarContainer">
            <button>Load</button>
            <button>Save</button>
            <button>Clear</button>
            <button>Settings</button>
            <span id="playerWins">Wins: </span>
            <span>Losses: </span>
        </div>
    )
}
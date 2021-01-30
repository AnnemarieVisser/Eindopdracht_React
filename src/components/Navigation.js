import React from 'react';
import {
    Link
  } from "react-router-dom";

export const Navigation= () => {

    return(
        <nav className="nav">
            <h1 className="nav_h1">React Playlist</h1>
         <div className="nav_link">
              <Link to="/">Home</Link>
        </div> 
            <div className="nav_link">
              <Link to="/about">About</Link>

            </div>
        </nav>
    )
}
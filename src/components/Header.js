import React from "react";

const Header =({ handleToggleDarkMode }) =>{
    return(
        <div className="header">
            <h1>Notes</h1>
            <a href="https://github.com/Bugzseater" >Git Hub</a>
            <button
                onClick={() =>
                    handleToggleDarkMode(
                        (preiousDarkMode)=> !preiousDarkMode
                        )
                    }
                className="save">Theme
            </button>
        </div>
    )
}

export default Header;
import React from "react";

function Footer(){
    return(
        <footer>
            <p>
                &copy; Rajvir Bhatti & Paulo Pineda. All rights reserved.
            </p>
            {/* DEBUG BUTTON TO RESET LOCAL STORAGE */}
            {/* <button onClick={() => localStorage.clear()}>Clear LocalStorage</button> */}
        </footer>
    );
}

export default Footer;
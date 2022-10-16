import React from "react";
const customStyle={
    color: "white",
    fontFamily: "Montserrat",
    fontSize:"20px",
    backgroundColor: "dimgrey",
    margin: "auto -16px",
    padding:" 16px 32px"
}
function Heading(){
    return(
        <header style={customStyle}>
            <h1>Mihir's Notes</h1>
        </header>
    );
}
export default Heading;
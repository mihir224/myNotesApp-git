import React from "react";
const customStyle={
    color: "white",
    fontFamily: "Montserrat",
    fontSize:"20px",
    padding: "10px 0 10px 0",
}
function Heading(){
    return(
        <header style={customStyle}>
            <h1>Mihir's Notes</h1>
        </header>
    );
}
export default Heading;
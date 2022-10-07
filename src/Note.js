import React from "react";
const customStyle={
    fontFamily: "Montserrat",
    border: "10px solid black",
    marginRight: "75%",
    paddingBottom: "50px"
}
function Note(){
    return (
        <div style={customStyle}>
            <h1>RandomTitle</h1>
            <p>RandomPara</p>
        </div>
    )
}
export default Note;
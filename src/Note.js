import React from "react";
const customStyle={
    fontFamily: "Montserrat",
    color:"white",
    border: "5px solid black ",
    padding: "10px 0 10px 0",
    borderRadius:"20px",
    margin:"5em 35em 0 35em",
    textAlign:"center"
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
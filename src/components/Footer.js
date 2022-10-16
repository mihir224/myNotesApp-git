import React from "react";
var year=new Date();
var currentYear=year.getFullYear();
const customStyle={
    color:"black",
    fontFamily: "Montserrat",
    textAlign: "center",
    position:"absolute",
    left:"0",
    bottom:"0",
    right:"0"
}
function Footer(){
    return (
        <footer style={customStyle}>
            <p>
                copyright {currentYear}
            </p>
        </footer>
    );
}
export default Footer;
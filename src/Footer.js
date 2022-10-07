import React from "react";
var year=new Date();
var currentYear=year.getFullYear();
const customStyle={
    color:"grey",
    fontFamily: "Montserrat"
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
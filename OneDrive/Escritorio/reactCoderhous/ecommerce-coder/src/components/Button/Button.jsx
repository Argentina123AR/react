import React from "react";
import "./Button.css";

function Button (props){
console.log(props);
let buttonStyle = { backgroundColor: props.color};

return (
    <button style={buttonStyle} className= "btn">
        {props.children}
    </button>
)
}
export default Button;
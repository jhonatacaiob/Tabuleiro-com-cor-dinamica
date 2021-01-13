import React from "react";
import './casa.css'

export default function casa(props){

    return(

        // eslint-disable-next-line react/style-prop-object
        <div className = {`casa${props.classe}`} id = {props.idCasa} style = {{width: 100 + "px", height: 100 + "px", display: "inline-block", backgroundColor: props.color}}>
        </div>
       
        
    )


}
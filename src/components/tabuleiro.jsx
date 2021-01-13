import React from "react";
import Linha from './linha';


export default function tabuleiro(){


    var linhas = []
    for (let i = 1; i <= 8; i++) {
        linhas.push(<Linha idLinha = {i}/>)
    }
    linhas.sort();  

    return(
        
        <div className = "tabuleiro">
            {linhas}
        </div>

    )


}
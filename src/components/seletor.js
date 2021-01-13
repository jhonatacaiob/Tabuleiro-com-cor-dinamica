import React from 'react'

export default function Seletor(props){

    function mudaCor(e){
        var casas = document.getElementsByClassName(`casa${props.idSeletor}`);
        var seletorDeCor = document.getElementById(props.idSeletor)
        seletorDeCor.value = e.target.value;
        

        for(let i = 0; i < casas.length; i++){
            casas[i].style.backgroundColor = e.target.value;
        }
    }
    



    if(props.idSeletor === 's1'){
        return(
            <div className = "seletor" id = {props.idSeletor}>
                <label htmlFor = {props.idSeletor} > Insira uma cor </label>
                <input type = "color" id = {props.idSeletor} value = "#00ff00" onChange = {mudaCor}/>
            </div>
        )
    }else{
        return(
            <div className = "seletor" id = {props.idSeletor}>
                <label htmlFor = {props.idSeletor} > Insira uma cor </label>
                <input type = "color" id = {props.idSeletor} value = "#ffff00" onChange = {mudaCor}/>
            </div>
        )
    }
}
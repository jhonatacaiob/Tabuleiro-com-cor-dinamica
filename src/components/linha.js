import React from 'react'
import Casa from './casa'

function linhaPar(n){

    let nLinha = n;
    let casas = []
    for (let i = 1; i <= 8; i++) {
        if(i % 2 === 0) {
            casas.push(<Casa idCasa = {`${nLinha}${i}`} classe = "s1" color = "green" />)
        }else{
            casas.push( <Casa idCasa = {`${nLinha}${i}`} classe = "s2" color = "yellow" />)
        }
    }
    return casas;
}
function linhaImpar(n){
    let casas = []
    let nLinha = n;
    for (let i = 1; i <= 8; i++) {
        if(i % 2 === 0) {
            casas.push(<Casa idCasa = {`${nLinha}${i}`} classe = "s2" color = "yellow" />)
        }else{
            casas.push(<Casa idCasa = {`${nLinha}${i}`} classe = "s1" color = "green" />)
        }
    }return casas;

}


export default function linha(props){
    let casas = []
    if (props.idLinha % 2 === 0) {
        casas = linhaPar(props.idLinha)
    }else{
        casas = linhaImpar(props.idLinha)
    }
   
    return(
        <div className = "linha" id = {props.idLinha}>
             {casas}
        </div>

        
    )

}

import React from 'react';
import {DivTarefa} from '../../Style/styled'
import {FaTrashAlt as X} from "react-icons/fa";

export default function Tarefa(props) {
    return(
        <DivTarefa>
                <p><b>Título :</b> {props.titulo}</p>
                <p><b>Setor :</b> {props.setor}</p>
                <p><b>Descrição :</b> {props.descricao}</p>
                <button onClick={props.remove}><X/></button>
        </DivTarefa>
    )
}
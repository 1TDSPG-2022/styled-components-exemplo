import React from 'react';
import {BtnClose, DivTarefa} from '../../style/styled'


export default function Tarefa(props) {
    return(
        <DivTarefa>
            <BtnClose>X</BtnClose>

            <p><b>Título :</b> {props.titulo}</p>
            <p><b>Setor :</b> {props.setor}</p>
            <p><b>Descrição :</b> {props.descricao}</p>
        </DivTarefa>
    )
}
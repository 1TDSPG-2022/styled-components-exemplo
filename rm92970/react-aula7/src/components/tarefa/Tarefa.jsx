import React from 'react'
import styled from 'styled-components'

const DivTarefa = styled.div`
    background-color : #ffb;
    border : 2px solid #333;
    box-shadow : 5px 5px 5px #333;
    padding: 2vh 2vw;
    text-align:center;
    width:50vw;
    height:20vh;
    margin:5vh 30vw;
    h2,p{
            padding-bottom:1vh
        }
`
export default function Tarefa(props) {
    return (
        <div>
            <DivTarefa>
                <p><b>Título :</b> {props.titulo}</p>
                <p><b>Setor :</b> {props.setor}</p>
                <p><b>Descrição :</b> {props.descricao}</p>
            </DivTarefa>
        </div>
    )
}

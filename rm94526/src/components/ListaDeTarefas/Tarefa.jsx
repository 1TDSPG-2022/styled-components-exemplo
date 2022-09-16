import React from 'react'
import styled from 'styled-components'

const DivTarefa = styled.div`
    background-color: #ffb;
    border: 2px solid #333;
    box-shadow: 5px 5px 5px #333;
    padding: 20px;
    margin: 10px;
    border-radius: 5px;
    h2,p{padding-bottom: 10px;}
`

export default function Tarefa(props) {
  return (
    <div>
        <DivTarefa>
            <h2>{props.tarefa.titulo}</h2>
            <p>Para: {props.tarefa.setor}</p>
            <p>{props.tarefa.descricao}</p>
        </DivTarefa>
    </div>
  )
}

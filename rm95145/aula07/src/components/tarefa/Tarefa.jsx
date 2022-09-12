import React from 'react'
import styled from 'styled-components'

const DivTarefa = styled.div`
  background-color: #ffb;
  border: 2px solid #333;
  box-shadow: 5px 5px 5px #333;
  padding: 20px;
  text-align: center;
  width: 350px;
  height: 200px;
  margin: 100px;
  h2,
  p {
    padding-bottom: 10px;
  }
`

export default function Tarefa(props) {
  return (
    <div>
      <DivTarefa>
        <p>
          <b>Título:</b>
          {props.titulo}
        </p>
        <p>
          <b>Setor:</b>
          {props.setor}
        </p>
        <p>
          <b>Descrição:</b> {props.descricao}
        </p>
      </DivTarefa>
    </div>
  )
}
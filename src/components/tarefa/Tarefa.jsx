import React from 'react';
import {ButaoFechar, DivTarefa} from '../../style/styled'

export default function Tarefa(props) {
  return(
    <div>
        <DivTarefa>
          <ButaoFechar>X</ButaoFechar>
            <p><b>Titulo:</b> {props.titulo} </p>
            <p><b>Setor:</b> {props.setor} </p>
            <p><b>Descrição:</b> {props.descricao} </p>
        </DivTarefa>
    </div>
  )
}


import React from 'react'

import  { DivTarefa, BtnClose } from '../style/styled'


export default function Tarefa(props) {
  return (
    <div>
        <DivTarefa>
          <BtnClose/>
            <p><b>Titulo : </b>{props.titulo}</p>
            <p><b>Setor : </b>{props.setor}</p>
            <p><b>Descrição : </b>{props.descricao}</p>
        </DivTarefa>
    </div>
  )
}



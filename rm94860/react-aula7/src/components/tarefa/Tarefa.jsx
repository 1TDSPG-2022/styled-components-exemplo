import React from 'react'
import { BtnClose, DivTarefa} from '../../style/styled'


export default function Tarefa(props) {
  return (
    <div>
        <DivTarefa>
          <BtnClose/>
           <p><b>Título: {props.titulo}</b></p>
           <p><b>Setor: {props.titulo}</b></p>
           <p><b>Descrição: {props.titulo}</b></p>
        </DivTarefa>
    </div>
  )
}
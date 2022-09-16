import React from 'react'
import styled from 'styled-components'
import { BtnNova } from '../../style/styled'
export default function FormTarefa(props) {
  return (
    <div>
        <form method='POST' onSubmit={props.adicionarDados}>
            <div>
                <label htmlFor="">Titulo</label>
                <input type="titulo" name='titulo' placeholder='Titulo' value={props.novaTarefa.titulo}
                onChange={props.capturaDados}/>
            </div>

            <div>
                <label htmlFor="">Setor</label>
                <input type="text" name='setor' placeholder='Setor' value={props.novaTarefa.setor}
                onChange={props.capturaDados}/>
            </div>

            <div>
                <label htmlFor="">Descrição</label>
                <input type="text" name='descricao' placeholder='descricao' value={props.novaTarefa.descricao}
                onChange={props.capturaDados} />
            </div>
            <BtnNova type='submit'>Adicionar</BtnNova>
        </form>
    </div>
  )
}

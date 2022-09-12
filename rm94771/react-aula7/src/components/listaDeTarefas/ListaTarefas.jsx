import React, { useState } from 'react'
import styled from 'styled-components'
import Tarefa from '../tarefa/Tarefa'

const DivLista = styled.div`
  width: 100%;
  min-height: 85vh;
  background-color: #ffb;
  padding: 20px;
  border: 2px solid #ccc;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export default function ListaTarefas() {
  const [tarefa, setTarefa] = useState([
    {
      titulo: 'Lista de Pagamento',
      setor: 'Departamento de Vendas',
      descricao: 'Levantar os valores das vendas'
    },
    {
      titulo: 'Planilha de Salários',
      setor: 'Dep. Pessoal',
      descricao: 'Gerar Planilhas'
    },
    {
      titulo: 'Lançar Notas',
      setor: 'Coordenação',
      descricao: 'Lançar a nota dos CPs e adicionar ponto extra.'
    }
  ])

  return (
    <div>
      <p>Lista de Tarefas</p>
      <DivLista>
        {tarefa.map((t, i) => (
          <Tarefa
            key={i}
            titulo={t.titulo}
            setor={t.setor}
            descricao={t.descricao}
          />
        ))}
      </DivLista>
    </div>
  )
}

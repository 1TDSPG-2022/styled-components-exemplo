
import React from 'react'
import styled from 'styled-components';
import Tarefa from './Tarefa';

const DivLista = styled.div`
  width: 100%;
  min-height: 85vh;
  padding: 20px;
  background-color: #ccc;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function ListaDeTarefas() {

  const lista = [{
    titulo: 'Lista de Tarefas',
    setor: 'Setor de Tarefas',
    descricao: 'Descrição da Lista de Tarefas',
  },
  {
    titulo: 'Lista de Tarefas',
    setor: 'Setor de Tarefas',
    descricao: 'Descrição da Lista de Tarefas',
  },]

  const [tarefas, setTarefas] = React.useState(lista);
  const criarTarefa = (e) => {
    setTarefas([...tarefas, {
      titulo: 'Lista de Tarefas',
      setor: 'Setor de Tarefas',
      descricao: 'Descrição da Lista de Tarefas',
    }])
  }
  
  React.useEffect(() => {
    
  }, [tarefas])
  

  return (
    <div>
        <form onSubmit={criarTarefa}>
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </form>
      <DivLista>
        {tarefas.map((tarefa, index) => {
          return (
            <Tarefa key={index} tarefa={tarefa} />
          )
        })}
      </DivLista>
    </div>
  )
}

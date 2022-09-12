import React, { useState } from 'react';
import styled from 'styled-components';
import Tarefa from '../tarefa/Tarefa';

//Criando o componente de estilos da ListaDeTarefas

const DivLista = styled.div`
    width: 100%;
    min-height: 85vh;
    background-color: #ffb;
    padding: 20px;
    border: 2px solid #ccc;
    display: flex; flex-wrap: wrap;
    justify-content: space-around;
`

export default function ListaDeTarefas() {

const[tarefa, setTarefa] = useState([
    {
        titulo: 'Lista de pagamento',
        setor: 'Dep.Vendas',
        descricao: 'Levantar os valores das vendas'
    },
    {
        titulo: 'Planilha de salarios',
        setor: 'Dp.Pessoal',
        descricao: 'Gerar planilhas'
    },
    {
        titulo: 'Lançar notas',
        setor: 'Dep.Coordenação',
        descricao: 'Lançar a nota dos cps e adicionar pontos extras'
    }
])

  return(
    <DivLista>
        {tarefa.map((t,i)=>
            <Tarefa
                key={i}
                titulo={t.titulo}
                setor={t.setor}
                descricao={t.descricao}
            />
        )}
    </DivLista>
  ) 
}


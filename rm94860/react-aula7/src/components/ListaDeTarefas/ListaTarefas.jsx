import React, { useState } from 'react'
import Tarefa from '../tarefa/Tarefa'
import styled from 'styled-components'

//CRIANDO O COMPONENTE DE ESTILOS DA ListaDeTarefas
const DivLista = styled.div` 
    width: 100%;
    min-heigth: 85vh;
    backgroud-color: #ffb;
    padding: 20px;
    border: 2px solid #ccc;
    display: flex; flex-wrap: wrap;
    justify-content: space-aroud;
`

export default function ListaTarefas() {

const[tarefa, setTarefa] = useState([
    {
        titulo: "Lista de Pagamento",
        setor: "Departamento de Vendas", 
        descricao: "Levantar os valores da Vendas."
    }
    ,
    {
        titulo: "Planilha de salários",
        setor: "Dep. Pessoal", 
        descricao: "Gerar Planilhas."
    }
    ,
    {
        titulo: "Lanças Notas",
        setor: "Coordenação", 
        descricao: "Lançar a nota dos CPs e adicionar ponto extra."
    }

])

  return (
    <DivLista>
        {tarefa.map((t,i)=>
        <Tarefa
             key={i}
             titulo={t.titulo}
             setor={t.titulo}
             descricao={t.titulo}
        />
        
        )}
    </DivLista>
  )
}

import React, { useState } from 'react'
import Tarefa from '../tarefa/Tarefa'
import styled from 'styled-components'

//CRIANDO O COMPONENTE DE ESTILOS DA ListaDeTarefas
const DivLista = styled.div`
    width: 100%;
    min-height: 85vh;
    background-color: #ffb;
    padding: 20px;
    border: 2px solid #ccc;
    display: flex; flex-wrap: wrap;
    justify-content: space-around;
`


export default function ListaTarefas() {

    const [tarefa, setTarefa] = useState([
        {
            titulo: "Lista de Pagamento",
            setor: "Dep. de Vendas",
            descricao: "Levantar os valores das Vendas."
        }
        ,
        {
            titulo: "Planilha de Salários",
            setor: "Dep. Pessoal",
            descricao: "Gerar Planilhas"
        }
        ,
        {
            titulo: "Lançar Notas",
            setor: "Coordenação",
            descricao: "Lançar a nota dos CPs e adicionar ponto extra."
        }
    ])

    return (
        <DivLista>
            {tarefa.map((t, i) =>
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
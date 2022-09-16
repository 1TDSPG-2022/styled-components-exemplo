import React from 'react';
import Tarefa from '../tarefa/Tarefas'
import { useState } from 'react';
import { DivLista } from '../../style/styled'

export default function ListaTarefas() {
    const [tarefa, setTarefa] = useState([{
            titulo: 'Lista de pagamentos',
            setor: 'Dep. Vendas',
            descricao: 'Levantar os valores das vendas'
        },
        {    
            titulo: 'Planilha de sálarios',
            setor: 'Dep. Pessoal',
            descricao: 'Gerar planilhas'
        },
        {
            titulo: 'Lançar nota',
            setor: 'Coordenação',
            descricao: 'Lançar notas do CP e adicionar ponto extra'
        }
    ])

    const addTarefa = ()=> {
        const novaTarefa ={
            titulo : "Planilha de Salario",
            setor : "Dep. Pessoal",
            descricao : "Gerar planilhas",
        }
        setTarefa([...tarefa, novaTarefa])
    }

    return(
        <DivLista>
            <button onClick={addTarefa}>Adicionar</button>
            {tarefa.map((tar,i) =>(
                <Tarefa
                key={i}
                titulo={tar.titulo}
                setor={tar.setor}
                descricao={tar.descricao}
                />
            ))}
        </DivLista>
    )
}
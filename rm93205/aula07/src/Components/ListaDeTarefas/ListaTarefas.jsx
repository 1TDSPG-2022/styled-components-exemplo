import React from 'react';
import Tarefa from '../Tarefa/Tarefa'
import { useState } from 'react';
import { DivLista } from '../../style/styled'
import FormTarefa from '../FormTarefa';

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

    const addTarefa = (e)=>{
        e.preventDefault()
        setNTarefa({"titulo":"","setor":"","descricao":""})
        setTarefa([...tarefa, nTarefa])
    }

    const[nTarefa, setNTarefa] = useState({"titulo":"","setor":"","descricao":""})

    const captura = (e)=>{
        e.preventDefault()
        const {name,value} = e.target

        if(name === "titulo"){
            setNTarefa({"titulo" : value, "setor" : nTarefa.setor, "descricao" : nTarefa.descricao})
        }else if(name === "titulo"){
            setNTarefa({"titulo" : nTarefa, "setor" : value, "descricao" : nTarefa.descricao})
        }else if(name === "titulo"){
            setNTarefa({"titulo" : value, "setor" : nTarefa.setor, "descricao" : nTarefa.descricao})
        }
    }

    return(
        <DivLista>
            <FormTarefa
                capturaDados={captura}
                adicionarDados={addTarefa}
                novaTarefa={nTarefa}
            />
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
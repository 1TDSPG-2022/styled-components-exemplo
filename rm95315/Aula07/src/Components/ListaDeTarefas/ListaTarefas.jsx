import React from 'react';
import Tarefa from '../Tarefa/Tarefa'
import { useState } from 'react';
import {DivLista} from '../../Style/Styled'
import FormTarefas from '../FormTarefas';

export default function ListaTarefas() {
    const addTarefa= ()=>{
        const novaTarefa={
            titulo: 'Planilha de Salário',
            setor: 'Dep. Pessoal',
            descricao: 'Gerar Planilhas'
        }
        setTarefa=([...tarefa, novaTarefa])
    }
    const addTarefa1= e=>{
        e.preventDefault()
        setTarefa([...tarefa,tarefa])}

    const [ntarefa, setntarefa] = useState([{
        titulo: '',setor : '', descricao: ''
    }])
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
    //criar a função de captura dos dados do form
    const captura = (e)=>{
        e.preventDefault()
        const{name,value} = e.target

        if(name === "titulo"){
            setTarefa({'titulo': value, 'setor': ntarefa.setor, 'descrição': ntarefa.descricao})
        }
        else if(name === "setor"){
            setTarefa({'titulo': ntarefa.titulo, 'setor': value, 'descrição': ntarefa.descricao})
        }
        else if(name === "descricao"){
            setTarefa({'titulo': ntarefa.titulo, 'setor': ntarefa.setor, 'descrição': value})
        }
    }

    return(
        <DivLista
        novaTarefa= {ntarefa}
        capturaDados= {captura}
        adicionarDados = {addTarefa1}>
            <FormTarefas/>
            {Tarefa.map((tar,i) =>(
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
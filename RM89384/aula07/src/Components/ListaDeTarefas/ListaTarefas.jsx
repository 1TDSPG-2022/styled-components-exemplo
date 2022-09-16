import React from 'react';
import Tarefa from '../Tarefa/Tarefa'
import { useState } from 'react';
import {DivLista} from '../../Style/styled'
import FormTarefas from '../FormTarefa/FormTarefas';

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

    const [nTarefa, setNTarefa] = useState({
        titulo: '', setor: '', descricao: '',})

    const addTarefa = e =>{
        e.preventDefault()

        setNTarefa({titulo: '', setor: '', descricao: '',})
        setTarefa([...tarefa, nTarefa])
    }

    const captura = e=>{
        e.preventDefault()
        const {value, name} = e.target

        if(name === 'titulo'){
            setNTarefa({'titulo':value,'setor':nTarefa.setor, 'descricao':nTarefa.descricao})
        }else if(name === 'setor'){
            setNTarefa({'titulo':nTarefa.titulo,'setor':value, 'descricao':nTarefa.descricao})
        }else if(name === 'descricao'){
            setNTarefa({'titulo':nTarefa.titulo,'setor':nTarefa.setor, 'descricao':value})
        }
    }

    const removerTarefa = tar  =>{
        let lista = tarefa  
        lista = lista.filter((t) => t!== tar)
        setTarefa(lista)
    }

    return(
        <DivLista>
            <FormTarefas addTarefa={addTarefa} tarefa={nTarefa} digit={captura}/>
            {tarefa.map((tar,i) =>(
                <Tarefa
                key={i}
                titulo={tar.titulo}
                setor={tar.setor}
                descricao={tar.descricao}
                remove = {removerTarefa.bind(this,tar)}
                />
            ))}
        </DivLista>
    )
}
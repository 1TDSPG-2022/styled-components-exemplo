import React from 'react';
import Tarefa from '../Tarefa/Tarefa'
import { useState } from 'react';
import { BtnNova, DivLista } from '../../style/styled' 
import FormTarefa from '../FormTarefa/FormTarefa';

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

    const addTarefa =(e) =>{
        e.preventDefault()
        setnTarefa({titulo: '', setor: '', descricao: ''})
        setTarefa([...tarefa, nTarefa])
    }

    //criando useState para compor o objeto tarefa
    const [nTarefa, setnTarefa] = useState({"titulo":"","setor:":"", "descricao":""})


    const captura = (e) =>{
        e.preventDefault()
        const {name,value} = e.target

        if(name === "Titulo"){
            setnTarefa({"titulo": value, "setor": nTarefa.value, 
            "descricao": nTarefa.descricao })
        }else if(name === "setor"){
            setnTarefa({"titulo":nTarefa.value, "setor": value, 
        "descricao":nTarefa.value})
        }else if(name === "descricao"){
            setnTarefa({"titulo": nTarefa.value, "setor":nTarefa.value, "descricao":value})
        }
    }

    return(
        <DivLista>
            <FormTarefa
            capturaDados = {captura}
            adicionarDados = {addTarefa}
            novaTarefa = {nTarefa}
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
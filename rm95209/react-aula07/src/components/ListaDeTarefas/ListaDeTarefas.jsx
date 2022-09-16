import React, { useState } from 'react'
import Tarefa from '../Tarefa/Tarefa'
import styled from 'styled-components'
import  { DivLista } from '../style/styled'
import Cadastro from '../formCadastro/formCadastro'


export default function ListaDeTarefas() {

    const[tarefa, setTarefa] = useState([
        {
            title : 'Lista de Pagamentos',
            setor : "Dep. de Vendas",
            descricao : "Levantar os valores das Vendas."
        },
        {
            title : 'Lista de Pagamentos',
            setor : "Dep. de Vendas",
            descricao : "Levantar os valores das Vendas."
        },
        {
            title : 'Lista de Pagamentos',
            setor : "Dep. de Vendas",
            descricao : "Levantar os valores das Vendas."
        }
    ])

    const addTarefa = (e) => {
        e.preventDefault()
        setNTarefa({"title": "", "setor": "", "descricao": ""})
        setTarefa([...tarefa, nTarefa])
    }

    // Criando Use-State Para Compor o Objeto
    const [nTarefa, setNTarefa] = useState({"title": "", "setor": "", "descricao": ""})

    const capture = (e) => {
        e.preventDefault()

        const {name, value} = e.target

        if(name === "titulo"){
            setNTarefa({"titulo" : value , "setor" : nTarefa.setor, "descricao" : nTarefa.descricao})
        }

        else if(name === "setor"){
            setNTarefa({"titulo" : nTarefa.titulo , "setor" : value, "descricao" : nTarefa.descricao})
        }
        
        else if(name === "descricao"){
            setNTarefa({"titulo" : nTarefa.titulo , "setor" : nTarefa.setor, "descricao" : value})
        }
    }
 //CRIAR A FUNÇÃO DE CAPTURA DOS DADOS DO FORM


    return (
        <>
           
            <DivLista>

                <Cadastro
                    capturaDados = {capture}
                    adicionarDados = {addTarefa}
                    novaTarefa = {nTarefa}       
                />

                {tarefa.map((t,i) => 
                    <Tarefa
                        titulo = {t.title}
                        setor = {t.setor}
                        descricao = {t.descricao}
                    />
                )}
                
            </DivLista>
        </>
    )
}

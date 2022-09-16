import React, { useState } from 'react';
import Tarefa from '../tarefa/Tarefa';
import {DivLista} from '../../style/styled'
import FormTarefa from '../formtarefa/FormTarefa';
//Criando o componente de estilos da ListaDeTarefas


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

const addTarefa = ()=>{
    e.preventDefault()
    setNTarefa


    setTarefa([...tarefa, nTarefa])
}

//Criando useState para compor objeto tarefa

const [nTarefa, setNTarefa] = useState
({"titulo": "", "setor":"","descricao":""})

const captura = (e)=>{
    e.preventDefault()
    const {name, value} = e.target
    if(name === "titulo"){
        setNTarefa({"titulo": value, "setor": nTarefa.setor, 
        "descricao": nTarefa.descricao})
    }
    if(name === "setor"){
        setNTarefa({"titulo": nTarefa.titulo, "setor": value, 
        "descricao": nTarefa.descricao})
    }
    if(name === "descricao"){
        setNTarefa({"titulo": nTarefa.titulo, "setor": nTarefa.setor, 
        "descricao": value})
    }
}

  return(
    <DivLista>
        <FormTarefa
            capturaDados={captura}
            adicionarDados={addTarefa}
            novaTarefa={nTarefa}
        />
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


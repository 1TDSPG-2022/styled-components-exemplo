import React, { useState } from 'react'
import Tarefa from '../tarefa/Tarefa'
import {DivLista} from '../../style/styled'
import FormTarefas from '../FormTarefa/FormTarefas'

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

    const addTarefa = (e)=>{
        e.preventDefault()
        setTarefa({"titulo" :"", "setor": "", "descricao": ""})
        setTarefa([...tarefa, nTarefa])
    }
    
    const[nTarefa, setNTarefa] = useState({"titulo" :"", "setor": "", "descricao": ""})
    //CRIAR A FUNÇÃO DE CAPTURA DOS DADOS DO FORM
    const captura = (e) =>{
        e.preventDefault()
        const {name, value} = e.target

        if(name === "titulo"){
            setNTarefa({"titulo": value, "setor" : nTarefa.setor, 
            "descricao" : nTarefa.descricao})
        }else if(name === "descricao"){
            setNTarefa({"titulo" : nTarefa.titulo , "setor" : nTarefa.setor, "descricao" : value})
        }
    }
    
    
    return (
        <DivLista>
            <FormTarefas
                capturaDados={captura}
                adicionarDados={addTarefa}
                novaTarefa={nTarefa}
            />
            
            {tarefa.map((tar, i) =>
                <Tarefa
                    key={i}
                    titulo={tar.titulo}
                    setor={tar.setor}
                    descricao={tar.descricao}
                />
            )}
        </DivLista>
    )
}
import React, { useState } from 'react'
import Tarefa from '../tarefa/Tarefa'
import { DivLista } from '../../style/styled'
import FormTaerfas from '../FormTarefa/FormTarefas'
import FormTarefas from '../FormTarefa/FormTarefas'

//CRIANDO O COMPONENTE DE ESTILOS DA ListaDeTarefas

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

    const addTarefa = ()=>{
        const novaTarefa = {
            titulo: "Planilha de Salário",
            setor : "Dep. Pessoal",
            descricao : "Gerar Planilhas"
        }

        setTarefa(([...tarefa, novaTarefa]))
    }

    //CRIANDO USE-SATE PARA COMPOR OBJETO TAREFA

const[nTarefa, setNTarefa] = useState({"titulo":"","setor":"", "descricao":""})


    //CRIAR A FUNCAO DE CAPTURA DOS DADOS DO FORM

    const captura = (e)=>{
        e.preventDefault()
        const{name, value} = e.target

        if(name=== "titulo"){
            setNTarefa({"titulo" : value , "setor" : nTarefa.setor,
            "descricao" : nTarefa.descricao})
        }else if(name === "descricao"){
            setNTarefa({"titulo" : nTarefa.titulo , "setor" : nTarefa.setor, "descricao" : value})
        }
    }
    


    return (
        <DivLista>
            <FormTarefas
            capturaDados={captura}
            adicionarTarefas={addTarefa}
            novaTarefa={nTarefa}
            />
            <button on onClick={addTarefa}>Adicionar</button>
            {tarefa.map((t, i) =>(
                <Tarefa
                    key={i}
                    titulo={t.titulo}
                    setor={t.setor}
                    descricao={t.descricao}
                />
            ))}
        </DivLista>
    )
}
import React from 'react';
import Tarefa from '../tarefa/Tarefa'
import { useState } from 'react';
import { DivLista } from '../../style/styled'
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

    const addTarefa = (e)=>{
        e.preventDefault()
        setNTarefa({"titulo":"", "setor":"", "descricao":""})
        setTarefa([...tarefa, nTarefa])

        
    }

    //CRIANDO USE-STATE PARA COMPOR OBJETO TAREFA
    const[nTarefa, setNTarefa] = useState({"titulo":"", "setor":"", "descricao":""})

    //CRIAR A FUÇÃO DE CAPRURA DOS DADOS DO FORM
    const captura = (e)=>{
        e.preventDefault()
        const {name, value} = e.target

        if(name === "titulo"){
            setNTarefa({"titulo":value, "setor":nTarefa.setor, "descricao":nTarefa.descricao})
        }else if(name === "setor"){
            setNTarefa({"titulo":nTarefa.titulo, "setor":value, "descricao":nTarefa.descricao})
        }else if(name === "descricao"){
            setNTarefa({"titulo":nTarefa.titulo, "setor":nTarefa.setor, "descricao":value})
        }
        
    }

    return(
        <DivLista>
            
            <FormTarefa/>
                capturaDados={captura}
                adicionarDados={addTarefa}
                novaTarefa={nTarefa}

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
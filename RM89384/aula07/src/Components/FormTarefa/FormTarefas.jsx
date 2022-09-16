import React from "react";
import styled from 'styled-components';


const DivForm = styled.div`
    width: 100%;
    padding: 20px;
    background-color: #993;

    form{width: 50%; margin: auto;}
    form input, form textarea{padding: 5px; width:80%;}
    form textarea{height: 80px;}
    form button{padding:10px; background: #3c3; color:#fff;}
`

export default function FormTarefas (props)  {
    return(
        <div>
            <form method="post" onSubmit={props.addTarefa}>
                <div>
                    <label>Titulo</label>
                    <input name="titulo" placeholder="Titulo" value={props.tarefa.titulo} onChange={props.digit}/>
                </div>
                <div>
                <label>Setor</label>
                    <input name="setor" placeholder="Setor" value={props.tarefa.setor} onChange={props.digit}/>
                </div>
                <div>    
                <label>Descrição</label>
                    <input name="descricao" placeholder="Descrição" value={props.tarefa.descricao} onChange={props.digit}/>
                </div>
                <button type="submit">Adicionar</button>
            </form>
        </div>
    )
}
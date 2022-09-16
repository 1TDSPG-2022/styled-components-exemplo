import React from 'react'

export default function FormTarefas() {
  return (
    <div>
        <form method="POST" onSubmit={props.adicionarDados}>
            <div>
                <label>Título</label>
                <input type="text" name="titulo" placeholder="Títuo" value ={props.novaTarefa}/>
                onChange = {props.capturaDados}
            </div>
            <div>
                <label>Setor</label>
                <input type="text" name="setor" placeholder="Setor" value ={props.novaSetor}/>
            </div>
            <div>
                <label>Descrição</label>
                <textarea name="descricao" cols="30" rows="10" placeholder="Descrição" value ={props.novaDescricao}></textarea>
            </div>
            <div>
                <button type="submit">Adicionar</button>
            </div>
        </form>
    </div>
  )

}
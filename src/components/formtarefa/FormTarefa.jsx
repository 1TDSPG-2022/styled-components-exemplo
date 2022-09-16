import React from 'react';


export default function formtarefa(props) {
  return(
    <div>
        <form method='POST' onSubmit={props.adicionarDados}>
            <div>
                <label>Titulo</label>
                <input type="text" name="titulo" placeholder='Titulo' value={props.novaTarefa.titulo}
                onChange={props.capturaDados}></input>
            </div>
            <div>
                <label>Setor</label>
                <input type="text" name="setor" placeholder='Setor' value={props.novaTarefa.setor}
                onChange={props.capturaDados}></input>
            </div>
            <div>
                <label>Descrição</label>
                <textarea name="descricao" cols="30" rows="10" placeholder='Descrição' value={props.novaTarefa.descricao}
                onChange={props.capturaDados}></textarea>
            </div>
            <div>
                <button type="submit">Adicionar</button>
            </div>
        </form>
    </div>
  )
}


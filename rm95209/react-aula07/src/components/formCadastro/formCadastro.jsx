import React from 'react';

export default function formCadastro(props) {
  return (
    <>
        <form method='POST' onSubmit={props.adicionarDados}>
            <div>
                <label>Titulo</label>
                <input type="text" name='title' placeholder='Título' value={props.novaTarefa.title} onChange={props.capturaDados}/>
            </div>

            <div>
                <label>Setor</label>
                <input type="text" name='setor' placeholder='Setor' value={props.novaTarefa.setor}  onChange={props.capturaDados}/>
            </div>

            <div>
                <label>Descrição</label>
                <textarea name="descricao" cols="30" rows="10" placeholder='Descrição'
                value={props.novaTarefa.descricao}  onChange={props.capturaDados} ></textarea>
            </div>
            <div>
                <button type="submit">Adicionar</button>
            </div>
        </form>   
    </>
  );
}

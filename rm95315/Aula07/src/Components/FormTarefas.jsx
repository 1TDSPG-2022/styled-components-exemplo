import React from 'react'

export default function FormTarefas(props) {
  return (
    <div>
        <form method='POST'onSubmit={props.adcionarDados}>
            <div>
                <label>Título</label>
                <input type="text" name='titulo' placeholder='Titulo' value={props.novaTarefa.titulo} onChange={props.capturaDados}/>
            </div>
            <div>
                <label>Setor</label>
                <input type="text" name='setor' placeholder='Setor' value={props.novaTarefa.setor}/>
            </div>
            <div>
                <label>Descrição</label>
                <textarea name="descricao" cols="30" rows="10" placeholder='Descrição' value={props.novaTarefa.descricao}></textarea>
            </div>
            <div>
                <button type='submit'>adicionar</button>
            </div>
        </form>
    </div>
  )
}

import React from 'react'

export default function FormTarefa(props) {
  return (
    <div>
        <form action="POST" onSubmit={props.adicionarDados}>
            <div>
                <label>Titulo</label>
                <input type="text" name="titulo" placeholder="Titulo" value={props.novaTarefa.titulo} onChange={props.capturaDados}/>
            </div>
            <div>
                <label>Setor</label>
                <input type="text" name='setor' placeholder='Setor' value={props.novaTarefa.setor} onChange={props.capturaDados}/>
            </div>
            <div>
                <label>Descricao</label>
                <textarea name="Descricao" id="" cols="30" rows="10" placeholder='Descricao' value={props.novaTarefa.descricao} onChange={props.capturaDados}></textarea>
            </div>
            <div>
                <button type='submit'>Adicionar</button>
            </div>
        </form>
    </div>
  )
}

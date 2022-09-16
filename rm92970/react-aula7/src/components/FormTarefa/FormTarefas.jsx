import React from 'react'

export default function FormTarefas(props){
    return(
        <div>
            <form method='POST' onSubmit={props.adicionarDados}>
                <div>
                    <label>Título</label>
                    <input type="text" name="titulo" placeholder="Título"/>
                </div>
                <div>
                    <label>Setor</label>
                    <input type="text" name="setor" placeholder="Setor"/>
                </div>
                <div>
                <label>Descrição</label>
                <textarea name="descricao" cols="30" rows="10" placeholder="Descrição"></textarea>
            </div>
            <div>
                <button type="submit">Adicionar</button>
            </div>
        </form>
    </div>
  )
}
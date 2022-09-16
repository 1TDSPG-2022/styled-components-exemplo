import React from 'react'

export default function FormTarefas() {
  return (
    <div>
        <form method='POST' onSubmit="">
            <div>
                <label>Titulo</label>
                <input type="text" name='titulo' placeholder='Titulo'/>
            </div>
            <div>
                <label>Setor</label>
                <input type="text" name='setor' placeholder='Setor'/>
            </div>
            <div>
                <label>Descrição</label>
                <textarea name='descricao' cols="30" rows="10" placeholder='Descricao'></textarea>
            </div>
            <div>
                <button type='submit'>Adicionar</button>
            </div>
        </form>
    </div>
  )
}

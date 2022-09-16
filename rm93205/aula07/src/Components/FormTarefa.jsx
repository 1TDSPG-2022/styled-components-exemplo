import React from 'react'

export default function FormTarefa() {
  return (
    <div>
        <form action="POST" onSubmit="">
            <div>
                <label>Titulo</label>
                <input type="text" name="titulo" placeholder="titulo"/>
            </div>
            <div>
                <label>Setor</label>
                <input type="text" name='setor' placeholder='Setor'/>
            </div>
            <div>
                <label>Descricao</label>
                <textarea name="Descricao" id="" cols="30" rows="10" placeholder='Descricao'></textarea>
            </div>
            <div>
                <button type='submit'>Adicionar</button>
            </div>
        </form>
    </div>
  )
}

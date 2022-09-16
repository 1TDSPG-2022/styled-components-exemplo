import React, { useState } from 'react'
import { DivLista } from '../../style/styled'
import FormTarefas from '../FormTarefas/FormTarefas'
import Tarefa from '../Tarefa/Tarefa'

export default function ListaTarefas() {
  const [tarefa, setTarefa] = useState([
    {
      titulo: 'Lista de Pagamento',
      setor: 'Departamento de Vendas',
      descricao: 'Levantar os valores das vendas'
    },
    {
      titulo: 'Planilha de Salários',
      setor: 'Dep. Pessoal',
      descricao: 'Gerar Planilhas'
    },
    {
      titulo: 'Lançar Notas',
      setor: 'Coordenação',
      descricao: 'Lançar a nota dos CPs e adicionar ponto extra.'
    }
  ])

  const addTarefa = e => {
    e.preventDefault()

    setNTarefa({ titulo: '', setor: '', descricao: '' })
    setTarefa([...tarefa, nTarefa])
  }

  const [nTarefa, setNTarefa] = useState({
    titulo: '',
    setor: '',
    descricao: ''
  })

  const captura = e => {
    e.preventDefault()

    const { name, value } = e.target

    if (name === 'titulo') {
      setNTarefa({
        titulo: value,
        setor: nTarefa.setor,
        descricao: nTarefa.descricao
      })
    } else if (name === 'setor') {
      setNTarefa({
        titulo: nTarefa.titulo,
        setor: value,
        descricao: nTarefa.descricao
      })
    } else if (name === 'descricao') {
      setNTarefa({
        titulo: nTarefa.titulo,
        setor: nTarefa.setor,
        descricao: value
      })
    }
  }
  return (
    <DivLista>
      <FormTarefas
        capturaDados={captura}
        adicionarDados={addTarefa}
        novaTarefa={nTarefa}
      />
      {tarefa.map((t, i) => (
        <Tarefa
          key={i}
          titulo={t.titulo}
          setor={t.setor}
          descricao={t.descricao}
        />
      ))}
    </DivLista>
  )
}

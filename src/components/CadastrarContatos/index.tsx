// import { IMaskInput } from 'react-imask'
import { Formulario } from './styles'
import { BotaoSalvar } from '../Contato/styles'
import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import ContatoClass from '../../models/Contato'
import { cadastrar } from '../../store/reducers/contatos'

export const CadastrarContato = () => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const inserirContato = (evento: FormEvent) => {
    evento.preventDefault()
    const cadastroParaAdicionar = new ContatoClass(100, nome, email, telefone)
    dispatch(cadastrar(cadastroParaAdicionar))
  }
  return (
    <>
      <Formulario onSubmit={inserirContato}>
        <input
          required
          type="text"
          placeholder="Nome completo"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
        />
        <input
          required
          type="email"
          placeholder="melhor e-mail"
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
        <input
          required
          // mask="(00)0 0000-0000"
          placeholder="Telefone"
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
        />
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Formulario>
    </>
  )
}

import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { deletar, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

export const Contato = ({
  id,
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal
}: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  const dispatch = useDispatch()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal)
    }
  }, [nomeOriginal, emailOriginal, telefoneOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }
  function salvarEdicao() {
    dispatch(
      editar({
        id,
        nome,
        telefone,
        email
      })
    )
    setEstaEditando(false)
  }

  return (
    <S.Card>
      <S.DadosContato>
        <S.DadoContato
          required
          disabled={!estaEditando}
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
        />
        <S.DadoContato
          required
          disabled={!estaEditando}
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
        <S.DadoContato
          disabled={!estaEditando}
          required
          placeholder="Telefone"
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
        />
      </S.DadosContato>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar onClick={salvarEdicao}>Salvar</S.BotaoSalvar>
            <S.BotaoSair onClick={cancelarEdicao}>Sair</S.BotaoSair>
          </>
        ) : (
          <>
            <S.BotaoEditar onClick={() => setEstaEditando(true)}>
              Editar
            </S.BotaoEditar>
            <S.BotaoDeletar onClick={() => dispatch(deletar(id))}>
              Deletar
            </S.BotaoDeletar>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

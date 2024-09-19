import { useDispatch, useSelector } from 'react-redux'
import { BuscadorStyle } from './styles'
import { alteraTermo } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'

export const Buscador = () => {
  const dispatch = useDispatch()
  const { termoBusca } = useSelector((state: RootReducer) => state.filtro)
  return (
    <BuscadorStyle>
      <input
        type="text"
        placeholder="Quem busca?"
        value={termoBusca}
        onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
      />
    </BuscadorStyle>
  )
}

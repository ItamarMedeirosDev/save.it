import BarraLateral from './containers/BarraLateral'
import EstiloGlobal, { ContainerGeral } from './globalStyles'
import { SecaoPrincipal } from './containers/SecaoPrincipal'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <ContainerGeral>
        <BarraLateral />
        <SecaoPrincipal />
      </ContainerGeral>
    </Provider>
  )
}

export default App

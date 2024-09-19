import {
  Branding,
  EnunciadoCadastro,
  EnunciadoBusca
} from '../../components/Branding'
import { Buscador } from '../../components/Buscador'
import { CadastrarContato } from '../../components/CadastrarContatos'
import { BarraLateralStyle, ContainerBuscaCadastrar } from './styles'

const BarraLateral = () => {
  return (
    <>
      <BarraLateralStyle>
        <main>
          <ContainerBuscaCadastrar>
            <EnunciadoBusca />
            <Buscador />
          </ContainerBuscaCadastrar>
          <ContainerBuscaCadastrar>
            <EnunciadoCadastro />
            <CadastrarContato />
          </ContainerBuscaCadastrar>
        </main>
        <Branding />
      </BarraLateralStyle>
    </>
  )
}

export default BarraLateral

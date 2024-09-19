import { styled } from 'styled-components'
import variaveis from '../../globalStyles/variaveis'

export const BuscadorStyle = styled.div`
  input {
    width: 100%;
    border-radius: 7px;
    margin-top: 5px;
    color: ${variaveis.barraLateralCor};
    outline: none;
    border: ${variaveis.secaoPrincipalCor} solid 0.001px;
    padding: 8px 8px;
    background-color: transparent;
  }
  ::-webkit-input-placeholder {
    color: ${variaveis.barraLateralCor};
  }
  ::-ms-input-placeholder {
    color: ${variaveis.barraLateralCor};
  }
`

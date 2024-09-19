import { styled } from 'styled-components'
import variaveis from '../../globalStyles/variaveis'

export const Formulario = styled.form`
  margin-top: 10px;
  input {
    width: 100%;
    border-radius: 7px;
    margin-top: 5px;
    color: ${variaveis.dadosLetraCor};
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

  button {
    margin-top: 5px;
    width: 100%;
  }
`

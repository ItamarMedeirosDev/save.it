import styled from 'styled-components'
import variaveis from '../../globalStyles/variaveis'

export const BarraLateralStyle = styled.div`
  max-width: 100%;
  height: 100vh;
  background-color: ${variaveis.barraLateralCor};
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ContainerBuscaCadastrar = styled.div`
  padding: 10px;
  border-radius: 7px;
  margin-bottom: 15px;
  background-color: ${variaveis.fundoCardCor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

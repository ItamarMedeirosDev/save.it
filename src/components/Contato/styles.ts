import styled from 'styled-components'
import variaveis from '../../globalStyles/variaveis'

export const Card = styled.div`
  background-color: ${variaveis.fundoCardCor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  display: flex;
  width: 90%;
  margin: 10px auto;
  border-radius: 8px;
`
export const DadosContato = styled.div`
  display: flex;
  width: 100%;
  background-color: transparent;
  margin: 5px;
  color: ${variaveis.dadosLetraCor};
  outline: none;
  border: none;
  padding: 8px 0;
  text-align: center;

  input {
    border: none;
    background-color: transparent;
  }
`

export const DadoContato = styled.textarea`
  padding: 8px;
  border: none;
  background-color: transparent;
  resize: none;
  width: 300px;
`
export const BarraAcoes = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-around;
  padding: 3px;
`
export const Botao = styled.button`
  font-weight: 500;
  font-size: 18px;
  color: ${variaveis.botaoLetraCor};
  border-radius: 8px;
  border: none;
  padding: 4px 15px;
  cursor: pointer;
  width: 100px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.botaoSalvarCor};
`
export const BotaoSair = styled(Botao)`
  background-color: ${variaveis.botaoSairDeletar};
`
export const BotaoDeletar = styled(Botao)`
  background-color: ${variaveis.botaoSairDeletar};
`
export const BotaoEditar = styled(Botao)`
  background-color: ${variaveis.botaoEditarCor};
`

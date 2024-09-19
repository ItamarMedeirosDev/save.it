import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type FiltroState = {
  termoBusca: string
}

const initialState: FiltroState = {
  termoBusca: ''
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termoBusca = action.payload
    }
  }
})

export const { alteraTermo } = filtroSlice.actions
export default filtroSlice.reducer

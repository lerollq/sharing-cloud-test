import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import rootReducer from './store/rootReducer'
import 'styled-components'
declare global {
  type AppState = ReturnType<typeof rootReducer>

  type ThunkResult<R> = ThunkAction<R, AppState, any, AnyAction>

  type ThunkDispatch = ThunkDispatch<AppState, any, AnyAction>
}

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      sm: string
      md: string
      lg: string
      xl: string
    }
    colors: {
      primary: string
    }
  }
}

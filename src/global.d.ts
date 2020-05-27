import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import rootReducer from './store/rootReducer'

declare global {
  type AppState = ReturnType<typeof rootReducer>

  type ThunkResult<R> = ThunkAction<R, AppState, any, AnyAction>

  type ThunkDispatch = ThunkDispatch<AppState, any, AnyAction>
}

import rootReducer from './store/rootReducer'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { Action, AnyAction } from 'redux'

declare global {
  type AppState = ReturnType<typeof rootReducer>

  type ThunkResult<R> = ThunkAction<R, AppState, {}, AnyAction>

  type ThunkDispatch = ThunkDispatch<AppState, {}, AnyAction>
}

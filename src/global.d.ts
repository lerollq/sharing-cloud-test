import rootReducer from './store/rootReducer'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import requestExecutor from '../helpers/requestExecutor'

declare global {
  type AppState = ReturnType<typeof rootReducer>

  type ThunkResult<R> = ThunkAction<R, AppState, ExtraArguments, Action>

  type ThunkDispatch = ThunkDispatch<AppState, ExtraArguments, Action>
}

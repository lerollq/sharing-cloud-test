import { createSelector } from 'reselect'

const getState = (state: AppState) => state.user

const selectLoggedIn = createSelector(getState, (state) => state.loggedIn)

export const selectors = {
  selectLoggedIn,
}

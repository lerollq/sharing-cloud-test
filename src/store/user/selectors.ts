import { createSelector } from 'reselect'

const getState = (state: AppState) => state.user

const selectLoggedIn = createSelector(getState, (state) => state.loggedIn)
const selectUserId = createSelector(getState, (state) => state.user?.id ?? '')
export const selectors = {
  selectLoggedIn,
  selectUserId,
}

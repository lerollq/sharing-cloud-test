import { createSelector } from 'reselect'

const getState = (state: AppState) => state.resource

const selectResource = createSelector(getState, (state) => state.resource)
const selectStatus = createSelector(getState, (state) => ({ loaded: state.loaded, loading: state.loading }))
export const selectors = {
  selectResource,
  selectStatus,
}

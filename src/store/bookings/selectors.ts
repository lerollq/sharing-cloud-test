import { createSelector } from 'reselect'

const getState = (state: AppState) => state.bookings

const getBookingById = (state: AppState, id: string) => state.bookings.bookings.filter((b) => b.id === id)[0]

const selectLoaded = createSelector(getState, (state) => state.loaded)
const selectLoading = createSelector(getState, (state) => state.loading)
const selectBookingsId = createSelector(getState, (state) => state.bookings.map((b) => b.id))
const selectBookingsById = createSelector(getBookingById, (booking) => ({
  name: booking.name,
  start: booking.start,
  end: booking.end,
  bookerId: booking.userId,
}))
const selectBookingsTimes = createSelector(getState, (state) => state.bookings.map((b) => ({ start: b.start, end: b.end })))

export const selectors = {
  selectLoaded,
  selectLoading,
  selectBookingsId,
  selectBookingsById,
  selectBookingsTimes,
}

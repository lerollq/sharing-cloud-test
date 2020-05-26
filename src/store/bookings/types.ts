export interface Booking {
  id: string
  start: string
  end: string
  name: string
  userId: string
}

export interface InitialState {
  bookings: Booking[]
  loaded: boolean
  loading: boolean
}

export enum ActionTypeKeys {
  BOOKINGS_SET = 'BOOKINGS_SET',
  BOOKINGS_ADD = 'BOOKINGS_ADD',
  BOOKING_DELETE = 'BOOKINGS_DELETE',
  BOOKINGS_SET_STATUS = 'BOOKING_SET_STATUS',
}

export interface SetBookings {
  readonly type: ActionTypeKeys.BOOKINGS_SET
  readonly payload: {
    bookings: Booking[]
  }
}

export interface AddBooking {
  readonly type: ActionTypeKeys.BOOKINGS_ADD
  readonly payload: {
    booking: Booking
  }
}

export interface DeleteBooking {
  readonly type: ActionTypeKeys.BOOKING_DELETE
  readonly payload: {
    bookingId: string
  }
}

interface SetStatus {
  readonly type: ActionTypeKeys.BOOKINGS_SET_STATUS
  readonly payload: {
    loaded: boolean
    loading: boolean
  }
}

export type ActionTypes = SetBookings | DeleteBooking | SetStatus | AddBooking

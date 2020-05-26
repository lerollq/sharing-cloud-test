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
}

export interface SetBookings {
  readonly type: ActionTypeKeys.BOOKINGS_SET
  readonly payload: {
    bookings: Booking[]
  }
}

export type ActionTypes = SetBookings
